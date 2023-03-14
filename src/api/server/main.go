package main

import (
	"database/sql"
	"errors"
	"fmt"
	"log"
	"net/http"
	"strconv"
	"strings"
	"time"

	"github.com/gin-gonic/gin"
	_ "github.com/lib/pq"
)

type Movie struct {
	Id        string   `json:"id"`
	Name      string   `json:"name"`
	Language  string   `json:"language"`
	Image     string   `json:"image"`
	HeadImage string   `json:"headImage"`
	Tags      []string `json:"tags"`
	Comment   string   `json:"comment"`
}
type Theatre struct {
	Id       string `json:"id"`
	Name     string `json:"name"`
	Location string `json:"location"`
	Image    string `json:"image"`
}

type Seats struct {
	Time  string       `json:"time"`
	Seats [12][12]bool `json:"seats"` //n*m B4 C7
}
type Show struct {
	Id        string `jsong:"id"`
	MovieId   string `json:"movieId"`
	TheatreId string `json:"theatreId"`
	Date      string `json:"date"`
	Time      string `json:"timing"`
	Seats     string `json:"seats"`
}

type Ticket struct {
	Id        string `json:"id"`
	Date      string `json:"date"`
	Time      string `json:"time"`
	Seats     string `json:"seats"`
	Screen    int    `json:"screen"`
	SeatCount int    `json:"seatCount"`
	MovieId   string `json:"movieId"`
	TheatreId string `json:"theatreId"`
	ShowId    string `json:"showId"`
}

type getSeat struct {
	Seats string `json:"seats"`
}

var movieList []Movie
var theatreList []Theatre
var showList []Show

func makeShows() {
	currentTime := time.Now()
	var cnt int = 0
	for k := 0; k < 7; k++ {
		for i := range movieList {
			for ii := range theatreList {
				for _, time := range []string{"2:00PM", "5:30PM", "7:00PM", "9:00PM"} {
					if k == 2 && i == 0 && ii == 0 && (time == "2:00PM" || time == "9:00PM") {
						continue
					} else {
						thisTime := currentTime.AddDate(0, 0, k)
						var tmpShow = Show{
							Id:        strconv.Itoa(cnt),
							MovieId:   strconv.Itoa(i),
							TheatreId: strconv.Itoa(ii),
							Date:      thisTime.Format("2-1-2006"),
							Time:      time,
							Seats:     "",
						}
						cnt++
						showList = append(showList, tmpShow)
					}
				}
			}
		}
	}
}

// func CORSMiddleware() gin.HandlerFunc {
// 	return func(c *gin.Context) {
// 		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
// 		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
// 		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
// 		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")
// 		if c.Request.Method == "OPTIONS" {
// 			c.AbortWithStatus(204)
// 			return
// 		}
// 		c.Next()
// 	}
// }

func findMoviesByLang(lang string) ([]Movie, error) {
	var filterMovies []Movie
	for i, t := range movieList {
		if t.Language == lang {
			filterMovies = append(filterMovies, movieList[i])
		}
	}
	if len(filterMovies) == 0 {
		return nil, errors.New("No movies found")
	}
	return filterMovies, nil
}
func findShowByAvail(movieId string, date string) ([]Show, error) {
	var tmpShow []Show
	for _, t := range showList {
		if t.MovieId == movieId && t.Date == date {
			tmpShow = append(tmpShow, t)
		}
	}
	if len(tmpShow) == 0 {
		return nil, errors.New("No show found")
	}
	return tmpShow, nil
}

func getMovies(c *gin.Context) {
	db := connect()
	fmt.Printf("Great !!! we are connected to a browser\n")
	if c.Request.Method != "GET" {
		c.IndentedJSON(http.StatusMethodNotAllowed, gin.H{"message": "This api is not valid. "})
		return
	}
	row, err := db.Query("select Id,Name,Language,Image,HeadImage,Tags,Comment from movies")
	if err != nil {
		c.IndentedJSON(http.StatusMethodNotAllowed, gin.H{"message": "Some issue while fetching querying SQL."})
		return
	}
	defer func() {
		row.Close()
		db.Close()
	}()
	movieList = movieList[:0]
	for row.Next() {
		var tmpMovie Movie
		var tags string
		err := row.Scan(&tmpMovie.Id, &tmpMovie.Name, &tmpMovie.Language, &tmpMovie.Image, &tmpMovie.HeadImage, &tags, &tmpMovie.Comment)
		if err != nil {
			log.Println(err)
			c.IndentedJSON(http.StatusMethodNotAllowed, gin.H{"message": "Error in scanning the row."})
			return
		}
		tmpMovie.Tags = strings.Split(tags, ":")
		movieList = append(movieList, tmpMovie)
	}
	c.IndentedJSON(http.StatusOK, movieList)
	db.Close()
}
func getTheatre(c *gin.Context) {
	db := connect()
	fmt.Printf("Great !!! we are connected to a browser\n")
	if c.Request.Method != "GET" {
		c.IndentedJSON(http.StatusMethodNotAllowed, gin.H{"message": "This api is not valid. "})
		return
	}
	row, err := db.Query("select Id,Name,Image,Location from theatre")
	if err != nil {
		c.IndentedJSON(http.StatusMethodNotAllowed, gin.H{"message": "Some issue while fetching querying SQL."})
		return
	}
	defer func() {
		row.Close()
		db.Close()
	}()

	theatreList = theatreList[:0]
	for row.Next() {
		var tmpTheatre Theatre
		err := row.Scan(&tmpTheatre.Id, &tmpTheatre.Name, &tmpTheatre.Image, &tmpTheatre.Location)
		if err != nil {
			log.Println(err)
			c.IndentedJSON(http.StatusMethodNotAllowed, gin.H{"message": "Error in scanning the row."})
			return
		}
		theatreList = append(theatreList, tmpTheatre)
	}
	c.IndentedJSON(http.StatusOK, theatreList)
}

func getMoviesByLang(c *gin.Context) {
	var lang = c.Param("language")
	filterMovies, err := findMoviesByLang(lang)
	if err != nil {
		c.IndentedJSON(http.StatusNotFound, gin.H{"message": "No Moves found!!"})
		return
	}
	c.IndentedJSON(http.StatusOK, filterMovies)
}
func getSeatsOfShow(c *gin.Context) {
	var mId = c.Param("mId")
	var tId = c.Param("tId")
	var time = c.Param("time")
	var date = c.Param("date")
	var seat string
	db := connect()
	fmt.Printf("Great !!! we are connected to a browser\n")
	if c.Request.Method != "GET" {
		c.IndentedJSON(http.StatusMethodNotAllowed, gin.H{"message": "This api is not valid. "})
		return
	}
	row := db.QueryRow("select Seats from shows where Date = $1 and Time = $2 and MovieId = $3 and TheatreId = $4", date, time, mId, tId)
	defer func() {
		db.Close()
	}()
	err := row.Scan(&seat)
	if err != nil {
		c.IndentedJSON(http.StatusNotFound, gin.H{"message": "Error in scanning the rows."})
		return
	}
	c.IndentedJSON(http.StatusOK, seat)

	// for _, t := range showList {
	// 	// fmt.Printf("%s_ %s %v %v\n", t.MovieId, t.TheatreId, mId, tId)
	// 	// fmt.Println(date, t.Date)
	// 	if t.MovieId == mId && t.TheatreId == tId && date == t.Date && time == t.Time {
	// 		// fmt.Printf("%v", t.Timing)
	// 		return
	// 	}
	// }
	// c.IndentedJSON(http.StatusNotFound, gin.H{"message": "Show Not Found!!"})
}
func getMovieShows(c *gin.Context) {
	var mId = c.Param("mId")
	var date = c.Param("date")
	var showAvailShow []Show

	db := connect()
	fmt.Printf("Great !!! we are connected to a browser\n")
	if c.Request.Method != "GET" {
		c.IndentedJSON(http.StatusMethodNotAllowed, gin.H{"message": "This api is not valid. "})
		return
	}
	row, err := db.Query("select Id,Time,Seats,Date,MovieId,TheatreId from shows order by Time,TheatreId")
	if err != nil {
		c.IndentedJSON(http.StatusMethodNotAllowed, gin.H{"message": "Some issue while fetching querying SQL."})
		return
	}
	defer func() {
		row.Close()
		db.Close()
	}()

	showList = showList[:0]
	for row.Next() {
		var tmpShow Show
		row.Scan(&tmpShow.Id, &tmpShow.Time, &tmpShow.Seats, &tmpShow.Date, &tmpShow.MovieId, &tmpShow.TheatreId)
		if err != nil {
			log.Println(err)
			c.IndentedJSON(http.StatusMethodNotAllowed, gin.H{"message": "Error in scanning the row."})
			return
		}
		showList = append(showList, tmpShow)
	}

	for _, t := range showList {
		if t.MovieId == mId && date == t.Date {
			showAvailShow = append(showAvailShow, t)
		}
	}
	if len(showAvailShow) == 0 {
		c.IndentedJSON(http.StatusNotFound, gin.H{"message": "Hey not found the data!!"})
		return
	}
	c.IndentedJSON(http.StatusOK, showAvailShow)
}
func getTicket(c *gin.Context) {
	db := connect()
	fmt.Printf("Great !!! we are connected to a browser\n")
	if c.Request.Method != "GET" {
		c.IndentedJSON(http.StatusMethodNotAllowed, gin.H{"message": "This api is not valid. "})
		return
	}
	row := db.QueryRow("SELECT Id, Date, Time, Seats, SeatCount, Screen, MovieId, TheatreId, ShowId FROM ticket")
	defer func() {
		db.Close()
	}()
	var ticket Ticket
	err := row.Scan(&ticket.Id, &ticket.Date, &ticket.Time, &ticket.Seats, &ticket.SeatCount, &ticket.Screen, &ticket.MovieId, &ticket.TheatreId, &ticket.ShowId)
	if err != nil {
		c.IndentedJSON(http.StatusNotFound, gin.H{"message": "Error while Scanning the List."})
		return
	}
	c.IndentedJSON(http.StatusOK, ticket)
}

func setSeatsOfShow(c *gin.Context) {
	var mId = c.Param("mId")
	var tId = c.Param("tId")
	var time = c.Param("time")
	var date = c.Param("date")
	var seat getSeat

	if err := c.BindJSON(&seat); err != nil {
		fmt.Printf("error: %T", err)
		return
	}

	db := connect()
	fmt.Printf("Great !!! we are connected to a browser\n")
	if c.Request.Method != "POST" {
		c.IndentedJSON(http.StatusMethodNotAllowed, gin.H{"message": "This api is not valid. "})
		return
	}
	row, err := db.Query("update shows set Seats = $1 where Date = $2 and Time = $3 and MovieId = $4 and TheatreId = $5 ", seat.Seats, date, time, mId, tId)
	if err != nil {
		c.IndentedJSON(http.StatusMethodNotAllowed, gin.H{"message": "Some issue while posting query to sqlDB."})
		return
	}
	defer func() {
		row.Close()
		db.Close()
	}()

	fmt.Printf("It Got Hit the End Point.%v", seat)
	c.IndentedJSON(http.StatusOK, seat)

}
func setTicket(c *gin.Context) {
	var ticket Ticket
	if err := c.BindJSON(&ticket); err != nil {
		c.IndentedJSON(http.StatusNotFound, gin.H{"Error": "Some Error Occurred."})
		return
	}
	db := connect()
	fmt.Printf("Great !!! we are connected to a browser\n")
	if c.Request.Method != "POST" {
		fmt.Print("This api is not valid. ")
		c.IndentedJSON(http.StatusMethodNotAllowed, gin.H{"message": "This api is not valid. "})
		return
	}
	row, err := db.Query("Update ticket set Id=$1,Date=$2,Time=$3,Seats=$4,SeatCount=$5,Screen=$6,MovieId=$7,TheatreId=$8,ShowId=$9 where id='0'",
		ticket.Id, ticket.Date, ticket.Time, ticket.Seats, ticket.SeatCount, ticket.Screen, ticket.MovieId, ticket.TheatreId, ticket.ShowId)
	if err != nil {
		fmt.Print("The query is not sent properly.")
		c.IndentedJSON(http.StatusNotFound, gin.H{"message": "The query is not sent properly."})
		return
	}
	defer func() {
		row.Close()
		db.Close()
	}()

	fmt.Printf("%v", ticket)
	c.IndentedJSON(http.StatusOK, gin.H{"success": true, "ticket": ticket})
}

func main() {
	router := gin.Default()
	// makeShows()
	// fmt.Printf("shows: %+v", showList)
	currentTime := time.Now()
	fmt.Printf("%T", currentTime.Format("2-1-2023"))
	router.GET("/movies", getMovies)
	router.GET("/theatres", getTheatre)
	// router.GET("/movies/:language", getMoviesByLang)
	router.GET("/seats/:mId/:tId/:date/:time", getSeatsOfShow)
	router.GET("/show/:mId/:date", getMovieShows)
	router.GET("/ticket", getTicket)
	router.POST("/seats/:mId/:tId/:date/:time", setSeatsOfShow)
	router.POST("/ticket", setTicket)
	// fmt.Printf("type of %T", `require("~/asset/images/83.png")`)
	router.Run(":8080")

	// for _, t := range showList {
	// 	fmt.Printf("('%s','%s','%s','%s','%s','%s'),\n", t.Id, t.Time, t.Seats, t.Date, t.MovieId, t.TheatreId)
	// }
}

func connect() *sql.DB {
	// dsn := "postgres://sameer:dd7s5aym5O0b9My4oml5vAjJP2yN5dxV@dpg-cg7vhrd269vf27dqd950-a.singapore-postgres.render.com/mydatabase_17jy"
	dsn := "postgres://sameer:dd7s5aym5O0b9My4oml5vAjJP2yN5dxV@dpg-cg7vhrd269vf27dqd950-a/mydatabase_17jy"
	db, err := sql.Open("postgres", dsn)
	checkErr(err)
	return db
}

func checkErr(err error) {
	if err != nil {
		panic(err)
	}
}

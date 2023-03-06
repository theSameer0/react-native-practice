package main

import (
	"errors"
	"fmt"
	"net/http"
	"strconv"
	"time"

	"github.com/gin-gonic/gin"
)

type Movie struct {
	Key       int      `json:"key"`
	Name      string   `json:"name"`
	Language  string   `json:"language"`
	Image     string   `json:"image"`
	HeadImage string   `json:"headImage"`
	Tags      []string `json:"tags"`
	Comment   string   `json:"comment"`
}
type Theatre struct {
	Id      string   `json:"id"`
	Name    string   `json:"name"`
	Comment string   `json:"comment"`
	Image   string   `jsong:"image"`
	Timings []string `json:"timings"`
}

type Seats struct {
	Time  string       `json:"time"`
	Seats [12][12]bool `json:"seats"` //n*m B4 C7
}
type Show struct {
	MovieId   string  `json:"movieId"`
	TheatreId string  `json:"theatreId"`
	Date      string  `json:"date"`
	Timing    []Seats `json:"timing"`
}

type Ticket struct {
	Id     string   `json:"id"`
	Date   string   `json:"date"`
	Time   string   `json:"time"`
	Seats  []string `json:"seats"`
	Screen int      `json:"screen"`
}

var movieList = []Movie{
	{
		Key:       0,
		Name:      "Matrix",
		Language:  "English",
		Image:     "require('~/assets/images/Matrix.png')",
		HeadImage: "require('~/assets/images/MatrixHeader.png')",
		Tags: []string{
			"English",
			"U/A",
			"2021",
			"Si-fi/Action",
			"2h 28m",
		},
		Comment: "To find out if his reality is a physical or mental construct, Mr. Anderson, aka Neo, will have to choose to follow the white rabbit once more. If he\"s learned anything, it\"s that choice, while an illusion...",
	},
	{
		Key:       1,
		Name:      "83",
		Language:  "Hindi",
		Image:     "require('~/assets/images/83.png')",
		HeadImage: "require('~/assets/images/83.png')",
		Tags: []string{
			"Hindi",
			"U/A",
			"2021",
			"Si-fi/Action",
			"2h 28m",
		},
		Comment: "To find out if his reality is a physical or mental construct, Mr. Anderson, aka Neo, will have to choose to follow the white rabbit once more. If he\"s learned anything, it\"s that choice, while an illusion...",
	},
	{
		Key:       2,
		Name:      "Saamanyudu",
		Language:  "Telugu",
		Image:     "require('~/assets/images/Saamanyudu.png')",
		HeadImage: "require('~/assets/images/Saamanyudu.png')",
		Tags: []string{
			"Telugu",
			"U/A",
			"2021",
			"Si-fi/Action",
			"2h 28m",
		},
		Comment: "To find out if his reality is a physical or mental construct, Mr. Anderson, aka Neo, will have to choose to follow the white rabbit once more. If he\"s learned anything, it\"s that choice, while an illusion...",
	},
	{
		Key:       3,
		Name:      "Pushpa",
		Language:  "Telugu",
		Image:     "require('~/assets/images/Pushpa.png')",
		HeadImage: "require('~/assets/images/Pushpa.png')",
		Tags: []string{
			"Telugu",
			"U/A",
			"2021",
			"Si-fi/Action",
			"2h 28m",
		},
		Comment: "To find out if his reality is a physical or mental construct, Mr. Anderson, aka Neo, will have to choose to follow the white rabbit once more. If he\"s learned anything, it's that choice, while an illusion...",
	},
}

var theatreList = []Theatre{
	{
		Id:      "0",
		Name:    "Urvashi Cinema Hall",
		Comment: "Shivaji Nagar",
		Image:   "require('~/assets/images/UrvashiCinemaHall.png')",
		Timings: []string{
			"2:00 PM",
			"5:30 PM",
			"7:00 PM",
			"9:30 PM",
		},
	},
	{
		Id:      "1",
		Name:    "Inox",
		Comment: "1mg Mall",
		Image:   "require('~/assets/images/Theatre.png')",
		Timings: []string{
			"2:00 PM",
			"5:30 PM",
			"7:00 PM",
			"9:30 PM",
		},
	},
	{
		Id:      "2",
		Name:    "Cinepolis",
		Comment: "Herbal",
		Image:   "require('~/assets/images/Theatre.png')",
		Timings: []string{
			"2:00 PM",
			"5:30 PM",
			"7:00 PM",
			"9:30 PM",
		},
	},
	{
		Id:      "3",
		Name:    "Matrix",
		Comment: "English",
		Image:   "require('~/assets/images/Theatre.png')",
		Timings: []string{
			"2:00 PM",
			"5:30 PM",
			"7:00 PM",
			"9:30 PM",
		},
	},
	{
		Id:      "4",
		Name:    "Cinema Hall",
		Comment: "SLN Mall",
		Image:   "require('~/assets/images/Theatre.png')",
		Timings: []string{
			"2:00 PM",
			"5:30 PM",
			"7:00 PM",
			"9:30 PM",
		},
	},
	{
		Id:      "5",
		Name:    "Cinema Hall",
		Comment: "SLN Mall",
		Image:   "require('~/assets/images/Theatre.png')",
		Timings: []string{
			"2:00 PM",
			"5:30 PM",
			"7:00 PM",
			"9:30 PM",
		},
	},
	{
		Id:      "6",
		Name:    "Cinema Hall",
		Comment: "SLN Mall",
		Image:   "require('~/assets/images/Theatre.png')",
		Timings: []string{
			"2:00 PM",
			"5:30 PM",
			"7:00 PM",
			"9:30 PM",
		},
	},
	{
		Id:      "7",
		Name:    "Cinema Hall",
		Comment: "DLF Mall",
		Image:   "require('~/assets/images/Theatre.png')",
		Timings: []string{
			"2:00 PM",
			"5:30 PM",
			"7:00 PM",
			"9:30 PM",
		},
	},
}

var showList []Show

var ticket = Ticket{
	Id:     "",
	Date:   "",
	Time:   "",
	Seats:  []string{},
	Screen: -1,
}

func makeShows() {
	var initialSeats [12][12]bool
	for i := 0; i < 12; i++ {
		for j := 0; j < 12; j++ {
			initialSeats[i][j] = false
		}
	}
	currentTime := time.Now()
	for k := 0; k < 7; k++ {
		for i := range movieList {
			for ii := range theatreList {
				thisTime := currentTime.AddDate(0, 0, k)
				var tmpShow = Show{
					MovieId:   strconv.Itoa(i),
					TheatreId: strconv.Itoa(ii),
					Date:      thisTime.Format("2-1-2006"),
					Timing: []Seats{
						{
							Time:  "2:00PM",
							Seats: initialSeats,
						},
						{
							Time:  "5:30PM",
							Seats: initialSeats,
						},
						{
							Time:  "7:00PM",
							Seats: initialSeats,
						},
						{
							Time:  "9:00PM",
							Seats: initialSeats,
						},
					},
				}
				showList = append(showList, tmpShow)
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

func getMovies(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, movieList)
}
func getTheatre(c *gin.Context) {
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
	fmt.Println(date)
	for _, t := range showList {
		// fmt.Printf("%s_ %s %v %v\n", t.MovieId, t.TheatreId, mId, tId)
		// fmt.Println(date, t.Date)
		if t.MovieId == mId && t.TheatreId == tId && date == t.Date {
			// fmt.Printf("%v", t.Timing)
			for _, tt := range t.Timing {
				if time == tt.Time {
					c.IndentedJSON(http.StatusOK, tt.Seats)
					return
				}
			}
		}
	}
	c.IndentedJSON(http.StatusNotFound, gin.H{"message": "Show Not Found!!"})
}
func getMovieShows(c *gin.Context) {
	var mId = c.Param("mId")
	movieShows := map[string]struct{}{}
	var showTheatreDetail []Theatre
	for _, t := range showList {
		if t.MovieId == mId {
			movieShows[t.TheatreId] = struct{}{}
		}
	}
	for _, t := range theatreList {
		if _, ok := movieShows[t.Id]; ok {
			showTheatreDetail = append(showTheatreDetail, t)
		}
	}
	c.IndentedJSON(http.StatusOK, showTheatreDetail)
}

func setSeatsOfShow(c *gin.Context) {
	var mId = c.Param("mId")
	var tId = c.Param("tId")
	var time = c.Param("time")
	var date = c.Param("date")
	var seat [12][12]bool

	if err := c.BindJSON(&seat); err != nil {
		fmt.Printf("error: %T", err)
		return
	}
	for _, t := range showList {
		if mId == t.MovieId && tId == t.TheatreId && date == t.Date {
			for _, tt := range t.Timing {
				if tt.Time == time {
					tt.Seats = seat
					c.IndentedJSON(http.StatusOK, tt.Seats)
					return
				}
			}
		}
	}
	c.IndentedJSON(http.StatusNotFound, gin.H{"message": "Wrong Update Request!!"})
}
func setTicket(c *gin.Context) {
	var tmpTicket = Ticket{}
	if err := c.BindJSON(&tmpTicket); err != nil {
		c.IndentedJSON(http.StatusNotFound, gin.H{"Error": "Some Error Occurred."})
		return
	}
	ticket = tmpTicket
	c.IndentedJSON(http.StatusOK, ticket)
}

func main() {
	router := gin.Default()
	makeShows()
	// fmt.Printf("shows: %+v", showList)
	currentTime := time.Now()
	fmt.Printf("%T", currentTime.Format("2-1-2023"))
	router.GET("/movies", getMovies)
	router.GET("/theatres", getTheatre)
	router.GET("/movies/:language", getMoviesByLang)
	router.GET("/seats/:mId/:tId/:date/:time", getSeatsOfShow)
	router.GET("/movieShows/:mId", getMovieShows)
	router.POST("/seats/:mId/:tId/:date/:time", setSeatsOfShow)
	router.POST("/ticket", setTicket)
	// fmt.Printf("type of %T", `require("~/asset/images/83.png")`)
	router.Run(":8080")
}

// func enableCors(w *http.ResponseWriter) {
// 	(*w).Header().Set("Access-Control-Allow-Origin", "http://localhost:8080")
// }

// func allMovies(w http.ResponseWriter, r *http.Request) {
// 	enableCors(&w)
// 	fmt.Fprint(w, "All Movies EndPoint Hit")
// 	fmt.Println("MY page was fetched")
// 	json.NewEncoder(w).Encode(movieList)
// }
// func homePage(w http.ResponseWriter, r *http.Request) {
// 	enableCors(&w)
// 	fmt.Fprint(w, "Endpoind Hit.")
// }

// func handleRequest() {
// 	http.HandleFunc("/", homePage)
// 	http.HandleFunc("/movies", allMovies)
// 	log.Fatal(http.ListenAndServe("192.168.0.119:8080", nil))
// }
// func main() {
// 	handleRequest()
// }

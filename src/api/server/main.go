package main

import (
	"net/http"

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
	// {
	// 	Key:       1,
	// 	Name:      "83",
	// 	Language:  "Hindi",
	// 	Image:     "require('~/assets/images/83.png')",
	// 	HeadImage: "require('~/assets/images/83.png')",
	// 	Tags: []string{
	// 		"Hindi",
	// 		"U/A",
	// 		"2021",
	// 		"Si-fi/Action",
	// 		"2h 28m",
	// 	},
	// 	Comment: "To find out if his reality is a physical or mental construct, Mr. Anderson, aka Neo, will have to choose to follow the white rabbit once more. If he\"s learned anything, it\"s that choice, while an illusion...",
	// },
	// {
	// 	Key:       2,
	// 	Name:      "Saamanyudu",
	// 	Language:  "Telugu",
	// 	Image:     "require('~/assets/images/Saamanyudu.png')",
	// 	HeadImage: "require('~/assets/images/Saamanyudu.png')",
	// 	Tags: []string{
	// 		"Telugu",
	// 		"U/A",
	// 		"2021",
	// 		"Si-fi/Action",
	// 		"2h 28m",
	// 	},
	// 	Comment: "To find out if his reality is a physical or mental construct, Mr. Anderson, aka Neo, will have to choose to follow the white rabbit once more. If he\"s learned anything, it\"s that choice, while an illusion...",
	// },
	// {
	// 	Key:       3,
	// 	Name:      "Pushpa",
	// 	Language:  "Telugu",
	// 	Image:     "require('~/assets/images/Pushpa.png')",
	// 	HeadImage: "require('~/assets/images/Pushpa.png')",
	// 	Tags: []string{
	// 		"Telugu",
	// 		"U/A",
	// 		"2021",
	// 		"Si-fi/Action",
	// 		"2h 28m",
	// 	},
	// 	Comment: "To find out if his reality is a physical or mental construct, Mr. Anderson, aka Neo, will have to choose to follow the white rabbit once more. If he\"s learned anything, it's that choice, while an illusion...",
	// },
}

func getMovies(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, movieList)
}

func main() {
	router := gin.Default()
	router.GET("/movies", getMovies)
	router.Run(":8080")
}

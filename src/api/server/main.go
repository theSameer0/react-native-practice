package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

type Movie struct {
	Name     string `json:"Name"`
	Language string `json:"Language"`
	Image    string `json:"Image"`
}

type movieList []Movie

func allMovies(w http.ResponseWriter, r *http.Request) {
	movies := movieList{
		Movie{Name: "Matrix", Language: "English", Image: `require(~/src/asset/image/Matrix.png)`},
	}
	fmt.Println("EndPoint Hit : the movieList")
	json.NewEncoder(w).Encode(movies)
}

func homePage(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "Home Page Hit")
}

func handleRequests() {
	http.HandleFunc("/", homePage)
	http.HandleFunc("/movie", allMovies)
	log.Fatal(http.ListenAndServe(":8082", nil))
}

func main() {
	handleRequests()
}

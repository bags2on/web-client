package main

import (
	"fmt"
	"html/template"
	"log"
	"net/http"
	"sync"
)

type templateBuilder struct {
	fileName string
	temple   *template.Template
	once     sync.Once
}

func main() {
	fmt.Println("Hello chat")
	http.HandleFunc("/", root)
	log.Fatal(http.ListenAndServe(":8080", nil))
}

func root(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/html")

	temple, err := template.ParseFiles("./templates/index.gohtml")
	if err != nil {
		panic(err)
	}


	if err := temple.Execute(w, nil); err != nil {
		panic(err)
	}
}

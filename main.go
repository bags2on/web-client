package main

import (
	"fmt"
	"github.com/gorilla/websocket"
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
	http.HandleFunc("/chat", chatHandler)
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

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
}

func chatHandler(w http.ResponseWriter, r *http.Request) {
	conn, _ := upgrader.Upgrade(w, r, nil) // error ignored for sake of simplicity

	for {
		msgType, msg, err := conn.ReadMessage()
		if err != nil {
			break
		}

		fmt.Printf("%s user say: %s\n", conn.RemoteAddr(), string(msg))

		if err = conn.WriteMessage(msgType, msg); err != nil {
			break
		}
	}

}

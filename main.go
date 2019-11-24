package main

import (
	"fmt"
	"log"

	"./rest"
)

func main() {
	fmt.Println("Start")
	log.Fatal(rest.RunAPI("127.0.0.1:8080"))
}

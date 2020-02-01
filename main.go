package main

import (
	"fmt"
	"log"

	"github.com/Vlad-Shevliakov/astro-bank/internal"
)

func main() {
	fmt.Println("Start")
	log.Fatal(internal.RunAPI("127.0.0.1:8080"))
}

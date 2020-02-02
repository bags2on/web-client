package main

import (
	"fmt"
	"log"

	"github.com/Vlad-Shevliakov/astro-bank/internal"
)

func main() {
	fmt.Println("Start")
	log.Fatal(internal.RunAPI(":8080"))
}

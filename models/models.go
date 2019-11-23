package models

import "time"

// Product - describe JSON which returned for client
type Product struct {
	Image       string  `json:"img"`
	Price       float64 `json:"price"`
	Promotion   float64 `json:"promotion"`
	ProductName string  `json:"productname"`
	Description string  `json:"description"`
}

// Customer - describe JSON which returned for client
type Customer struct {
	FirstName string `json:"firstname"`
	LastName  string `json:"lastname"`
	Email     string `json:"email"`
	LoggedIn  bool   `json:"loggedin"`
}

// Order - describe JSON all data which returned for client
type Order struct {
	Product
	Customer
	CustomerID   int       `json:"customer_id"`
	ProductID    int       `json:"product_id"`
	Price        float64   `json:"sell_price"`
	PurchaseDate time.Time `json:"purchase_date"`
}

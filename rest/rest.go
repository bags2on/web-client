package rest

import (
	"github.com/gin-gonic/gin"
)

func EntryAPI(address string) error {
	r := gin.Default()

	r.GET("/products", func(c *gin.Context) {
		// list of products
	})

	r.GET("/promos", func(c *gin.Context) {
		// list of promos
	})

	r.POST("/users/signin", func(c *gin.Context) {
		// sign in a user
	})

	r.POST("/users", func(c *gin.Context) {
		// add a user
	})

	r.POST("/user/:id/singout", func(c *gin.Context) {
		// sign out
	})

	r.GET("/user/:id/orders", func(c *gin.Context) {
		// get all orders of user by id
	})

	r.POST("/users/charge", func(c *gin.Context) {
		// send credit card token information to the backend

	})

}

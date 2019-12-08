package rest

import (
	"github.com/gin-gonic/gin"
)

func RunAPI(address string) error {
	h, err := NewHandler()
	if err != nil {
		return err
	}

	return RunAPIWithHandler(address, h)
}

// RunAPIWithHandler is entry point of all API
func RunAPIWithHandler(address string, h HandlerInterface) error {
	r := gin.Default()

	r.GET("/products", h.GetProducts)

	r.GET("/promos", h.GetPromos)

	r.Group("/user")
	{
		r.GET("/user/:id/orders", h.GetOrders)
		r.POST("/user/:id/singout", h.SignOut)
	}

	r.Group("/users")
	{
		// send credit card token information to the backend
		r.POST("/users/charge", h.Charge)
		r.POST("/users/signin", h.SignIn)
		r.POST("/users", h.AddUser)
	}

	return r.Run(address)
}

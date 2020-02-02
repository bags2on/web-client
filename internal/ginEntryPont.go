package internal

import (
	"github.com/gin-gonic/gin"
)

func RunAPI(address string) error {
	h, err := ApplicationHandler()
	if err != nil {
		return err
	}

	return RunAPIWithHandler(address, h)
}

const (
	gqlPath = "/"
	gqlPgPath = "/graphql"
)

// RunAPIWithHandler is entry point of all API
func RunAPIWithHandler(address string, h HandlerInterface) error {
	gin.SetMode(gin.ReleaseMode)
	r := gin.Default()

	r.GET("/ping", h.Pong)

	r.GET(gqlPgPath, PlaygroundHandler(gqlPath))
	r.POST(gqlPath, GraphqlHandler())
	/*
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
	*/

	return r.Run(address)
}


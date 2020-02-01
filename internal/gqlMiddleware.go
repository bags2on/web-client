package internal

import (
	"github.com/99designs/gqlgen/handler"
	"github.com/Vlad-Shevliakov/astro-bank/graphql"
	"github.com/gin-gonic/gin"
)

func GraphqlHandler() gin.HandlerFunc {
	// NewExecutableSchema and Config are in the generated.go file
	c := graphql.Config{
		Resolvers: &graphql.Resolver{},
	}

	h := handler.GraphQL(graphql.NewExecutableSchema(c))

	return func(c *gin.Context) {
		h.ServeHTTP(c.Writer, c.Request)
	}
}

// PlaygroundHandler Defines the Playground handler to expose our playground
func PlaygroundHandler(path string) gin.HandlerFunc {
	h := handler.Playground("Go GraphQL Server", path)
	return func(c *gin.Context) {
		h.ServeHTTP(c.Writer, c.Request)
	}
}
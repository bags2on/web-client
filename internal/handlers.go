package internal

import (
	"github.com/Vlad-Shevliakov/astro-bank/dblayer"
	"github.com/gin-gonic/gin"
	"net/http"
)

type HandlerInterface interface {
	Pong(c *gin.Context)
}

func ApplicationHandler() (*Handler, error) {
	return new(Handler), nil
}

type Handler struct {
	db dblayer.DBLayer
}

//func (h *Handler) GetPromos(c *gin.Context) {
//	if h.db == nil {
//		return
//	}
//
//	promos, err := h.db.GetPromos()
//	if err != nil {
//		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
//	}
//	c.JSON(http.StatusOK, promos)
//}

func (h *Handler) Pong(c *gin.Context) {
	c.String(http.StatusOK, "Pong :)")
}

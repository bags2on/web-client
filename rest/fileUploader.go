package rest

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"io"
	"os"
)

func (h *Handler) fileUploader(c *gin.Context) {

	file, err := c.FormFile("file")

	if err != nil {
		fmt.Println(err)
	}


	photo, err := os.Create("./" + file.Filename)

	if err != nil {
		panic(err)
	}

	defer photo.Close()

	io.Copy(photo, file)

}

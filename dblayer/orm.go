package dblayer

import (
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
)

type DBOrm struct {
	db *gorm.DB
}

func ConnectToDB(dbName, dbData string) (*DBOrm, error) {
	db, err := gorm.Open(dbName, dbData)
	if err != nil {
		return nil, err
	}
	db.LogMode(true)
	return &DBOrm{
		db: db,
	}, nil
}

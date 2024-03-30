package main

import (
	"database/sql"
	// 	"encoding/json"
	"log"
	// 	"net/http"
	"os"
	// 	"github.com/gorilla/mux"
	// 	"github.com/lib/pq"
)

type User struct {
	Id	int `json:"id"`
	Name	string `json:"name"`
	Email	string `json:"email"`
}

// main function
func main() {
	// connect to database
	db, err := sql.Open("postgres", os.Getenv("DATABASE_URL"));

	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	// create table if not exists
	_, err = db.Exec("CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, name TEXT, email TEXT)")
	if err != nil {
		log.Fatal(err)
	}
}
import mysql from "mysql2";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "3dayworkshop",
});

if (db) {
  console.log("Connected to MySQL database");
}

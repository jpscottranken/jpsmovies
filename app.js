const express = require("express")
const mysql = require("mysql")
const bodyParser = require("body-parser")
const path = require("path")
const port = process.env.port || 2468
const app = express()

//  Add middleware
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//  Set up database info
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "greatmovies",
})

//  Attempt to connect to MySQL
conn.connect((err) => {
  if (!err) {
    console.log("Connected to greatmovies database!")
  } else {
    console.log("Error connecting to greatmovies database")
  }
})

//  Define routes
app.get("/", (req, res) => {
	res.render("home")
})
	

// localhost:2468/movies/
app.get("/movies/", (req, res) => {
  conn.query("SELECT * FROM top25movies", (err, result) => {
    if (err) {
      throw err
    }

    res.render("index", { result: result })
  })
})

app.get("/movies/insert", (req, res) => {
	res.render("create")
})

app.post("/movies/insert", (req, res) => {
  //  Auto-generated id
  const id = req.body._id

  //  Form fields
  const title 		= req.body.title
  const yearmade 	= req.body.yearmade
  const runningtime = req.body.runningtime
  const category 	= req.body.category
  const rating 		= req.body.rating

  //  Set up string for query
  const query =
    "INSERT INTO top25movies (title, yearmade, runningtime, category, rating) VALUES ?"

  //  Set up values array
  const values = [
    [title, yearmade, runningtime, category, rating],
  ]

  //  Run query
  conn.query(query, [values], (err, result) => {
    conn.query("SELECT * FROM top25movies", (err, result) => {
      res.render("index", { result: result })
    })
  })
})

// localhost:2468/movies/delete
app.post("/movies/delete", (req, res) => {
  const id = req.body.id
  console.log(`The selected id is: ${id}`)
  const query = "DELETE FROM top25movies WHERE movie_id = ?"
  conn.query(query, [id], (err, result) => {
    console.log(`Record with id ${id} removed`)
    conn.query("SELECT * FROM top25movies", (err, result) => {
      res.render("index", { result: result })
    })
  })
})

app.get("/movies/edit", (req, res) => {
  const id = req.body.id
  res.render("edit", {movie_id:id})
})

app.post("/movies/edit", (req, res) => {
  const id = req.body.id

  console.log(`In edit routine. The id is: ${id}`)

  const title 		= req.body.title
  const yearmade 	= req.body.yearmade
  const runningtime = req.body.runningtime
  const category	= req.body.category
  const rating 		= req.body.rating

  const query =
    "UPDATE top25movies SET title = ?, yearmade = ?, runningtime = ?, category = ?, rating = ? WHERE movie_id = ?"
  conn.query(
    query,
    [title, yearmade, runningtime, category, rating, id],
    (err, result) => {
      console.log(`Record with id ${id} updated!`)
      conn.query("SELECT * FROM top25movies", (err, result) => {
        res.render("index", { result: result })
      })
    }
  )
})

app.listen(port, () => 
	console.log(`App running on port ${port}`))

const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: 'password',
    database: 'movies_db'
  },
  console.log(`Connected to the movies_db database.`)
);

// TODO: Create a movie
app.post('/api/new-movie', ({ body }, res) => {
 const movieName = "INSERT INTO movies (movie_name) VALUES (?)";
 const movie = body.movie_name;
 db.query(movieName , movie, (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
 })
});

// TODO: Read all movies
app.get('/api/movies', (req, res) => {
  db.query('SELECT * FROM movies', function (err, results) {
    console.log(results);
  })
});

// TODO: Delete a movie
app.delete('/api/movie/:id', (req, res) => {

});

// TODO: Read list of all reviews and associated movie name using LEFT JOIN
app.get('/api/movie-reviews', (req, res) => {

});

// BONUS: Update review name
app.put('/api/review/:id', (req, res) => {

});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

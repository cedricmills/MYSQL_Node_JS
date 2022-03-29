const express = require('express');
const { get } = require('express/lib/response');
const mysql = require('mysql');

// Connection information.
const db = mysql.createConnection({
  host : 'localhost',
  user : 'cedric',
  password : 'password',
  database : 'imdb_movies'
  });

//Connect to MySQL.
db.connect((err) => {
  if(err){
    throw err;
  }
    console.log('MySQL connection is working...');
});

const app = express();

// Create the DB.
app.get('/createdb', (req, res) => {
  let sql = 'CREATE DATABASE imdb_movies';
  db.query(sql, (err, result) => {
    if(err) throw err;
    console.log(result);
    res.send('The database was created successfully...');
  });
});

// Create the Table.
app.get('/createthetable', (req, res) => {
  let sql = 'CREATE TABLE movies(id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT, name VARCHAR(255), genre CHAR(255), year INTEGER, imdb_rating FLOAT, PRIMARY KEY(id))';

  db.query(sql, (err, result) => {
    if(err) throw err;
    console.log(result);
    res.send('Movies table has been created...');
  });
});

// Enter the 1st movie
app.get('/movie1', (req, res) => {
  let post = {name:'Black Panther', genre:'Action', year:'2018', imdb_rating:'7.3'};
  let sql = 'INSERT INTO movies SET ?';
  let query = db.query(sql, post, (err, result) => {
    if(err) throw err;
    console.log(result);
    res.send('Movie One has been added...');
  });
});

// Enter a 2nd Movie
app.get('/movie2', (req, res) => {
  let post = {name:'Blade', genre:'Action', year:'1998', imdb_rating:'7.1'};
  let sql = 'INSERT INTO movies SET ?';
  let query = db.query(sql, post, (err, result) => {
    if(err) throw err;
    console.log(result);
    res.send('Movie two has been added...');
  });
});

// Enter a 3rd Movie
app.get('/movie3', (req, res) => {
  let post = {name: 'Spawn', gener:'Action', year:'1997', imdb_rating:'5.2'};
  let sql = 'INSERT INTO movies SET ?';
  let query = db.query(sql, post, (err, result) => {
    if(err) throw err;
    console.log(result);
    res.send('Movie three has been added...');
  });
});

app.listen('3000', () => {
  console.log('The Server Has Started On Port 3000');
});

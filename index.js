import express from "express";
import http from "http";
import cors from "cors";
import mongoose from "mongoose";
import fetch from "node-fetch";
import "dotenv/config";

//Constants
const app = express();
const PORT = process.env.DEV_PORT || 8080;

app.use(cors({ origin: "*" }));
app.use(express.json())

const uri = "mongodb+srv://sergeantcatt:UCFProject25@cluster0.ku5rw4w.mongodb.net/readingTracker=Cluster0";

const collectionSchema = new mongoose.Schema({
    name: String, 
    books: [String],
});

const Collection = mongoose.model('Collection', collectionSchema, 'collections');


app.get('/api/collections', async (req, res)=> {

    try {
        const collections = await Collection.find()
        res.json(collections);

    }catch(e) {
        console.error(e)
    } 

})

app.use(express.json());




app.get('/api', (req, res) => {
  let books = fetch(`https://www.googleapis.com/books/v1/volumes?q=search-terms&key=AIzaSyD0hgDfU4VAnUhHxRUBUW16zxW7Pb9pMsY`)
  .then(response => response.json())
  .then(result => {
  res.send(result)
  })
})

app.get('/api-search-test', (req, res) => {
  let search = "flowers"
  let books = fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${search}&key=AIzaSyD0hgDfU4VAnUhHxRUBUW16zxW7Pb9pMsY`)
  .then(response => response.json())
  .then(result => {
  res.send(result)
  })
  //console.log(`https://www.googleapis.com/books/v1/volumes?q=$inauthor&key=AIzaSyD0hgDfU4VAnUhHxRUBUW16zxW7Pb9pMsY`)
})

app.post('/api-search-title', (req, res) => {
  console.log(req.body)
  let request = req.body
  let search = request.searchTerm
  let books = fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${search}&key=AIzaSyD0hgDfU4VAnUhHxRUBUW16zxW7Pb9pMsY`)
  .then(response => response.json())
  .then(result => {
  res.send(result)
  })
  //console.log(`https://www.googleapis.com/books/v1/volumes?q=$inauthor&key=AIzaSyD0hgDfU4VAnUhHxRUBUW16zxW7Pb9pMsY`)
})

const server = http.createServer(app);

const start = async () => {
  try {
    await mongoose.connect(uri)
    server.listen(PORT, () => console.log("Server started on port " + PORT));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();

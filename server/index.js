//IMPORTS
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config();

//MODELS
const Topic = require("./models/Topic");
const Blog = require("./models/Blog");

//INITIALIZING EXPRESS
const app = express();

//MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const uri = process.env.MONGO_URI;

mongoose
  .connect(uri)
  .then(() => {
    console.log("DB CONNECTED");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.get("/", (req, res) => {
  res.send("Hmm");
});

//ADD TOPIC
app.post("/api/topic", (req, res) => {
  const { selectedCategory, title, tags } = req.body;
  const topic = new Topic({ selectedCategory, title, tags });
  topic
    .save()
    .then(() => {
      res.json({ message: "Topic created successfully" });
    })
    .catch((error) => {
      console.error("Error creating topic", error);
      res.status(500).json({ error: "Internal Server Error" });
    });
});

//DELETE TOPIC
app.delete("/api/topic/:id", (req, res) => {
  const topicId = req.params.id;
  Topic.findByIdAndDelete(topicId)
    .then((deletedTopic) => {
      if (!deletedTopic) {
        return res.status(404).json({ error: "Topic not found" });
      }
      res.json({ message: "Topic deleted successfully" });
    })
    .catch((error) => {
      console.error("Error deleting topic:", error);
      res.status(500).json({ error: "Failed to delete topic" });
    });
});

//GET CATEGORY-WISE TOPICS
app.get("/api/topics", (req, res) => {
  const category = req.query.category;
  if(category === "All"){
    Topic.find()
    .then((topics) => {
      res.json(topics);
    })
    .catch((error) => {
      console.error("Error fetching topics:", error);
      res.status(500).json({ error: "Internal Server Error" });
    });
  }
  else{
    Topic.find({ selectedCategory: category })
    .then((topics) => {
      res.json(topics);
    })
    .catch((error) => {
      console.error("Error fetching topics:", error);
      res.status(500).json({ error: "Internal Server Error" });
    });
  }
});

//ADD BLOG
app.post("/api/blog", (req, res) => {
  const { title, content, tags, topicId } = req.body;

  const blog = new Blog({
    title,
    content,
    tags,
    topicId,
  });

  blog
    .save()
    .then((savedBlog) => {
      res.json(savedBlog);
    })
    .catch((error) => {
      console.error("Error creating blog:", error);
      res.status(500).json({ error: "Internal Server Error" });
    });
});

app.get("/api/blog/:id", (req, res) => {
  
  const topicId = req.params.id;
  // console.log(topicId);
  Blog.findOne({ topicId: topicId })
    .then((blog) => {
      res.json(blog);
    })
    .catch((error) => {
      console.error("Error fetching blogs:", error);
      res.status(500).json({ error: "Failed to fetch blogs" });
    });
});

//SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("SERVER IS STARTED");
});

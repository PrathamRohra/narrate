const mongoose = require("mongoose");

const Blog = mongoose.model('Blog', {
    title: {
        type: String,
        required: true
      },
      content: {
        type: String,
        required: true
      },
      tags: {
        type: Array,
        required: true
      },
      topicId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Topic",
        required: true,
      },
});

module.exports = Blog;

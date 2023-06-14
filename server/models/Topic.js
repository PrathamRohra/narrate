const mongoose = require("mongoose");

const Topic = mongoose.model('Topic', {
    selectedCategory: {
        type: "String",
        required: true
    },
    title: {
        type: String,
        required: true
    },
    tags: {
        type: Array,
        required: true
    }
});

module.exports = Topic;
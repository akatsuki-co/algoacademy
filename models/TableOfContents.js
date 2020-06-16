const mongoose = require("mongoose")

const TableOfContentsSchema = new mongoose.Schema({
    language: {
        type: String,
        required: [true, "Please provide a language"]
    },
    sidebar: [{
        "menu": {type: String, required: true},
        "subMenu": [String]
    }]
})

const TableOfContents = mongoose.model("TableOfContents", TableOfContentsSchema)

module.exports = TableOfContents

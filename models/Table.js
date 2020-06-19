const mongoose = require("mongoose")

const TableSchema = new mongoose.Schema({
    language: {
        type: String,
        required: [true, "Please provide a language"]
    },
    sidebar: [{
        "menu": {type: String, required: true},
        "subMenu": [String]
    }]
})

const Table = mongoose.model("Table", TableSchema)

module.exports = Table

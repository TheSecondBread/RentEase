const mongoose = require("mongoose");

const propSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: false
    },
    description: {
        type: String,
        required: true,
        unique: false
    },
    type: {
        type: String,
        required: true,
        unique: false
    },
    price: {
        type: String,
        required: true,
        unique: false
    },
    area: {
        type: String,
        required: true,
        unique: false
    },
    bedrooms: {
        type: String,
        required: true,
        unique: false
    },
    city: {
        type: String,
        required: true,
        unique: false
    },
    owner: {
        type: String,
        required: true,
        unique: false
    },
    number: {
        type: String,
        required: true,
        unique: false
    },
    address: {
        type: String,
        required: true,
        unique: false
    },
    avail: {
        type: String,
        required: true,
        unique: false
    },
    createdBy: {
        type: String,
        required: true,
        unique: false
    },
    imageUrls: {
        type: [String],  // Array of strings to store image URLs
        required: true,
        unique: false
    }
});

const PROP = mongoose.model("prop", propSchema);

module.exports = PROP;

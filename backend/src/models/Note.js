import mongoose from "mongoose";

//1. Create a schema
//2. Model based off of that schema

const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true,
        },

    },
    { timestamps: true } //createAt, updatedAt
);


const Note = mongoose.model("Note", noteSchema)

export default Note;
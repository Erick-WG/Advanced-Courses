// importing the all important mongoose ODM lib.
import mongoose from 'mongoose';

// destructuring Schema and model from mongoose.
const {Schema, model} = mongoose

// defining our schema using the destructured Schema constructor.
const Blog = new Schema({
  
  // Designing a simple schema with basic validation.
    title: {
      type: String,
      required: true,
    },
    slug: String,
    published: Boolean,
    author: String,
    content: String,
    tags: [String],
    createdAt: {
      type: Date,
      default: ()=> Date.now(),
      immutable: true,
    },
    updatedAt: Date,
    comments: [{
      user: String,
      content: String,
      votes: Number
    }]
  });

// creating the model.
const blog = model('Blog', Blog)

// exporting the model as a default.
export default blog;
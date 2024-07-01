import mongoose, { Schema } from "mongoose";

const feedbackSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  message: {
    type: String,
    required: true,
    trim: true,
  },

  rating: {
    type: Number,
    required: true,
  },
});

export const feedback = mongoose.model("Feedback", feedbackSchema);

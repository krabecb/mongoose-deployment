const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5
  },
  // Don't forget to add the comma above then
  // add the 3 new properties below
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  userName: String,
  userAvatar: String
}, {
  timestamps: true
});

const movieSchema = new Schema(
  {
    title: { type: String, required: true },
    releaseYear: {
      type: Number,
      default: function () {
        return new Date().getFullYear();
      },
      min: 1927,
    },
    mpaaRating: { type: String, enum: ["G", "PG", "PG-13", "R"] },

    cast: [
      {
        type: Schema.Types.ObjectId,
        ref: "Performer",
      },
    ],

    nowShowing: { type: Boolean, default: false },
    reviews: [reviewSchema],
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;

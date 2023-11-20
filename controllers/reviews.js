//Error: Route.post() requires a callback function but got a [object Undefined]

const Movie = require("../models/movie");

module.exports = {
  create,
};

async function create(req, res) {
  const movie = await Movie.findById(req.params.id);
  movie.reviews.push(req.body);

  try {
    await movie.save();
    console.log(movie);
  } catch (err) {
    console.log(err);
  }

  res.redirect(`/movies/${movie._id}`);
}

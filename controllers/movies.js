const Movie = require("../models/movie");
const Performer = require("../models/performer");

module.exports = {
  new: newMovie,
  create,
  index,
  show,
};

function newMovie(req, res) {
  res.render("movies/new", { title: "Add Movie", errorMsg: "" });
}

async function create(req, res) {
  req.body.nowShowing = !!req.body.nowShowing;
  for (let key in req.body) {
    if (req.body[key] === "") {
      delete req.body[key];
    }
  }

  try {
    const newMovie = await Movie.create(req.body);
    res.redirect(`/movies/${newMovie._id}`);
  } catch (err) {
    console.log(err);
    res.render("movies/new", { errorMsg: err.message });
  }
}

async function index(req, res, next) {
  try {
    const allMovies = await Movie.find({});
    res.render("movies/index", { title: "All Movies", movies: allMovies });
  } catch (err) {
    console.log(err);
    res.redirect("/");
  }
}

async function show(req, res) {
  try {
    const movie = await Movie.findById(req.params.id).populate("cast");
    const allPerformers = await Performer.find({ _id: { $nin: movie.cast } });
    res.render("movies/show", { title: "Movie Detail", movie, allPerformers });
  } catch (err) {
    console.log(err);
    res.redirect("/movies");
  }
}

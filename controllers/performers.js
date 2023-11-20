const Performer = require("../models/performer");
const Movie = require("../models/movie");

module.exports = {
  new: newPerformer,
  create,
  addToCast,
};

async function newPerformer(req, res) {
  const allPerformers = await Performer.find();

  res.render("performers/new", {
    title: "Add Performer",
    errorMsg: "",
    performers: allPerformers,
  });
}

async function create(req, res, next) {
  const newPerformer = { ...req.body, name: req.body.name.trim() };
  if (newPerformer.born === "") {
    newPerformer.born = new Date("2000, 12, 1");
  }

  try {
    const performer = await Performer.create(newPerformer);
    res.redirect("/performers/new");
  } catch (err) {
    console.log(err);

    res.render("performers/new", {
      title: "Add Performer",
      errorMsg: err.message,
      performers: [{}],
    });
  }
}

async function addToCast(req, res, next) {
  try {
    const movie = await Movie.findById(req.params.id);
    movie.cast.push(req.body.performerId);

    await movie.save();
    res.redirect(`/movies/${movie._id}`);
  } catch (err) {
    console.log(err);
    res.redirect(`/movies/${req.params.id}`);
  }
}

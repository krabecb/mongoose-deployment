require("dotenv").config();
// load env variables

// start db connection
require("./config/database");

//  import models
const Performer = require("./models/performer");
const Movie = require("./models/movie");

// import data
const { performers, movies } = require("./models/seed-data");

async function clearReviews(){
  try {
      const clearedMovies = await Movie.updateMany({}, {reviews: []})
      console.log(clearedMovies)
  }catch(err){
      console.log(err)
  }finally{
      process.exit()
  }
}

async function seedDatabase() {
  // console.log(performers, movies)
  // async
  try {
    // deleting all contents from both collections
    await Movie.deleteMany();
    await Performer.deleteMany();

    // populate both collections with their new data
    await Movie.create(movies);
    await Performer.create(performers);
  } catch (err) {
    // catch - console error close the process
    console.log("something bad happened", err);
  } finally {
    process.exit();
  }
}

// invoke function
// clearReviews()
seedDatabase();

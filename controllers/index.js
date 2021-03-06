const Ride = require('../models/ride');
const Review = require('../models/review');

const getAllRides = async (req, res) => {
  try {
    const rides = await Ride.find();
    return res.status(200).json({ rides });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    return res.status(200).json({ reviews });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getRideById = async (req, res) => {
  try {
    const { id } = req.params;
    const ride = await Ride.findById(id);
    if (ride) {
      return res.status(200).json({ ride });
    }
    return res.status(404).send('Ride with the specified ID does not exists');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const createReview = async (req, res) => {
  try {
    const review = await new Review(req.body);
    await review.save();
    return res.status(201).json({
      review
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateReview = async (req, res) => {
  try {
    const { id } = req.params;
    await Review.findByIdAndUpdate(
      id,
      req.body,
      { new: true },
      (err, review) => {
        // if (err) {
        //   res.status(500).send(err);
        // }
        // if (!review) {
        //   res.status(500).send('Review not found!');
        // }
        return res.status(200).json(review);
      }
    );
  } catch (error) {
    // res.status(500).send(error.message);
  }
};

const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Review.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send('Review deleted');
    }
    throw new Error('Plant not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getByRideName = async (req, res) => {
  const name = req.params.name;

  try {
    const reviews = await Review.find({ name: name });
    return res.status(200).json({ reviews });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getRideByRideName = async (req, res) => {
  const name = req.params.name;
  try {
    const rides = await Ride.find({ name: name });
    return res.status(200).json({ rides });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getAllRides,
  getRideById,
  getAllReviews,
  createReview,
  updateReview,
  deleteReview,
  getByRideName,
  getRideByRideName
};

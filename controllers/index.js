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
      (err, plant) => {
        if (err) {
          res.status(500).send(err);
        }
        if (!review) {
          res.status(500).send('Review not found!');
        }
        return res.status(200).json(review);
      }
    );
  } catch (error) {
    return res.status(500).send(error.message);
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

module.exports = {
  getAllRides,
  getAllReviews,
  createReview,
  updateReview,
  deleteReview
};

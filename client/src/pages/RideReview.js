import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Reviews from '../components/Reviews';
import ReviewForm from '../components/ReviewForm';
import { STATES } from 'mongoose';

const RideReview = (props) => {
  const [reviews, setReviews] = useState([]);
  const [ride, setRide] = useState([]);
  const { id } = useParams();
  /* form useStates */
  //   const [title, setTitle] = useState('');
  //   const [ridename, setRidename] = useState('');
  //   const [userName, setUserName] = useState('');
  //   const [description, setDescription] = useState('');
  //   const [rating, setRating] = useState(0);
  const [form, setForm] = useState({
    title: '',
    name: '',
    username: '',
    description: '',
    rating: 0
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    getRideAndReviews();
    // showReviews(ride)
  }, []);
  const postResults = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/api/reviews', form);

    console.log('This is when we should run an api request');
    // console.log('This is my ' + description);
  };
  const getRideAndReviews = async () => {
    const response = await axios.get(
      `http://localhost:3001/api/rides/id/${id}`
    );
    setRide(response.data.ride);
    const res = await axios.get('http://localhost:3001/api/reviews');
    let currentReviews = res.data.reviews.filter(
      (rideReview) => rideReview.name === response.data.ride.name
    );
    setReviews(currentReviews);
  };

  return (
    <div className="ride-card">
      <div className="img-wrapper">
        <img src={ride.image} alt="ride image" />
      </div>
      <div className="info-wrapper">
        <h2>{ride.name}</h2>
        <h3>{ride.description}</h3>
        <h3>{ride.heightRequirement}</h3>
      </div>
      <div className="reviews-card">
        <section>
          <ReviewForm onChange={handleChange} onSubmit={postResults} />
        </section>

        <section className="container-grid">
          {reviews.map((review) => (
            <Reviews
              title={review.title}
              name={review.name}
              username={review.username}
              description={review.description}
              rating={review.rating}
              key={review.id}
              // id={review._id}
              {...reviews}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default RideReview;

import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Reviews from '../components/Reviews'
import ReviewForm from '../components/ReviewForm'

const RideReview = (props) => {

    const [reviews, setReviews] = useState([])
    const [ride, setRide] = useState([])
    const { id } = useParams()

    const handleChange = (e) => {
        console.log(e.target.value)
    }

    useEffect(() => {
        getRideAndReviews()
        // showReviews(ride)

    }, [])

    const getRideAndReviews = async () => {
        const response = await axios.get(
            `http://localhost:3001/api/rides/id/${id}`
        )
        setRide(response.data.ride)
        const res = await axios.get(
            'http://localhost:3001/api/reviews'
            )
            let currentReviews = res.data.reviews.filter((rideReview) => rideReview.name === response.data.ride.name)
            setReviews(currentReviews)
    }

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
                <section>
                    <ReviewForm 
                    onChange={handleChange}
                    value={}
                    onSubmit={postResults}
                    />
                </section>
            </div>

        </div>
    )



}

export default RideReview
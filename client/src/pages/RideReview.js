import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Reviews from '../components/Reviews'

const RideReview = (props) => {

    const [reviews, setReviews] = useState([])
    const [ride, setRide] = useState([])
    const { id } = useParams()

    useEffect(() => {
        showReviews()
        getRide()

    }, [])

    const getRide = async () => {
        const response = await axios.get(
            `http://localhost:3001/api/rides/id/${id}`
        )
        console.log(response.data.ride.image)
        setRide(response.data.ride)
    }

    const showReviews = async () => {
        const res = await axios.get(
            'http://localhost:3001/api/reviews'
            )
            // `http://localhost:3001/api/reviews/${props.name}`
            // console.log('ridename', props.name)
            // /reviews/:name
            setReviews(res.data.reviews)
            
    }

    // console.log('rideimagereturn', response.data)

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
            </div>

        </div>
    )



}

export default RideReview
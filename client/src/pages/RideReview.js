import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const RideReview = (props) => {

const [ride, setRide] = useState([])
const { id } = useParams()

useEffect (() => {

    getRide()
  
  }, [])

const getRide = async () => {
    const response = await axios.get(
      `http://localhost:3001/api/rides/id/${id}`
    )
    console.log(response.data.ride.image)
    setRide(response.data)
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
                    {/* <Reviews /> */}
                </section>
            </div>

        </div>
    )



}

export default RideReview
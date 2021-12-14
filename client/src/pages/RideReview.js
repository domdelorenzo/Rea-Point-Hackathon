import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Reviews from '../components/Reviews'

const RideReview = (props) => {

const [rides, setRides] = useState([])
const { id } = useParams()

useEffect (() => {

    getRides()
  
  }, [])

const getRides = async () => {
    const response = await axios.get(
      `http://localhost:3001/api/rides/${id}`
    )
    setRides(response)
  }

// console.log(id)
    return (
        <div className="ride-card">
            <div className="img-wrapper">
                <img src={props.image} alt="ride image" />

            </div>
            <div className="info-wrapper">
                <h2>{props.name}</h2>
                <h3>{props.description}</h3>
                <h3>{props.heightRequirement}</h3>
            </div>
            <div className="reviews-card">
                <section className="container-grid">
                    <Reviews />
                </section>
            </div>

        </div>
    )



}

export default RideReview
import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import RideData from '../data/RideData'
import RideGenerator from '../components/RideGenerator'
// import ridesArr from '.../seed/rides.js'
import RideReview from './RideReview'

const Home = (props) => {

const [rides, setRides] = useState([])

useEffect (() => {

  getRides()

}, [])
  
  const getRides = async () => {
    const response = await axios.get(
      'http://localhost:3001/api/rides'
    )
    setRides(response.data.rides)
  }

    return (
        <div>
            <h1>Welcome!</h1>
            <section className="container-grid">
            {rides.map((ride) => (
            <RideGenerator
              
              name={ride.name}
              key={ride.id}
              height={ride.heightRequirement}
              image={ride.image}
              {...ride}
            />
          ))} 
            </section>
        </div>

    )
}

export default Home
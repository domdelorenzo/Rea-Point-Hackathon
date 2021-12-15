import React, { useState, useEffect } from 'react'
import axios from 'axios'
import RideGenerator from '../components/RideGenerator'
import '../App.css'

const Home = (props) => {

  const [rides, setRides] = useState([])


  useEffect(() => {

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
      <header>Rea Point</header>
      <section className="container-grid">
        {rides.map((ride) => (
          <RideGenerator
            name={ride.name}
            key={ride.id}
            id={ride._id}
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
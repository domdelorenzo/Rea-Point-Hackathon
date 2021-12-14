import React, { useState, useEffect } from 'react'
import axios from 'axios'
import RideData from '../data/RideData'
import RideGenerator from '../components/RideGenerator'

const Home = (props) => {

const [rides, setrides] = useState(RideData)

// setrides()


    return (
        <div>
            <h1>Welcome!</h1>
            <section className="container-grid">
            {rides.map((ride) => (
            <RideGenerator
            //   onClick={() => props.history.push(`/rides${genre.id}`)}
              name={ride.name}
              key={ride.id}
              image={ride.img}
              {...ride}
            />
          ))} 
            </section>
        </div>

    )
}

export default Home
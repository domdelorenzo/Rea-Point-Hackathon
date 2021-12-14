import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ride from '../components/RideGenerator'
import RideData from '../data/RideData'
import RideGenerator from '../components/RideGenerator'

const Home = (props) => {

const [rides, setrides] = useState(RideData)

// setrides()

//fetch testData.js

    return (
        <div>
            <h1>Welcome!</h1>
            <section className="container-grid">
             {/* {rides.map((ride) => ( */}
                 {/* <RideGenerator 
                    // onClick={() => props.history.push(`/ride/${ride.id}`)} //click should link to individual ride page (ride.jsx)
                    name={ride.name}
                    image={ride.img}
                    description={ride.description}
                    height={ride.heightRequirement}
                 /> */}

             {/* ))}    */}
            </section>
        </div>

    )
}

export default Home
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import '../App.css'


const RideGenerator = (props) => {
    console.log(props.id)
    //implement route path /ride/${id}
    return (
        <div className="ride-card">

            <div className="img-wrapper">
                    <img src={props.image} alt="ride image" />

            </div>
            <div className="info-wrapper">
                <h2>{props.name}</h2>
                <h3>{props.description}</h3>
                <h3>Height Requirement:{props.heightRequirement} inches</h3>
                < Link to={`/rides/${props.id}`} >
                <h4>Ride Reviews!</h4>
                </Link>
            </div>


        </div>
    )



}

export default RideGenerator
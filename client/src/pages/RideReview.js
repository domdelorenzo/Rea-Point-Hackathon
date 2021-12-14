import React from 'react'
import Reviews from './Review'


const RideGenerator = (props) => {

    //implement route path /ride/${id}
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

                </section>
            </div>

        </div>
    )



}

export default RideGenerator
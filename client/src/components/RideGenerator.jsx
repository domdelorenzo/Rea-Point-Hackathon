import React from 'react'

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
            {/* link to review */}

        </div>
    )



}

export default RideGenerator
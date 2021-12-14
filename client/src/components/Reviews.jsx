import React, { useEffect } from 'react'
import ReviewForm from './ReviewForm'


const Reviews = (props) => {
  

  return (
    < div >
      <h1>{props.title}</h1>
      <h2>{props.name}</h2>
      <h2>{props.username}</h2>
      <h2>{props.description}</h2>
      <h3>{props.rating} </h3>
      {/* key={review.id} */}
      {/* {showReviews()} */}
      {/* < ReviewForm /> */}
    </div >
  )
}

export default Reviews
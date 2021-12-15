import React, { useEffect } from 'react'
import ReviewForm from './ReviewForm'


const Reviews = (props) => {


  return (
    < div classname="review-box">
      <h1>{props.title}</h1>
      <h2>{props.name}</h2>
      <h3>{props.username}</h3>
      <h4>{props.description}</h4>
      <h3>{props.rating} </h3>
      {/* key={review.id} */}
      {/* {showReviews()} */}
      {/* < ReviewForm /> */}
      <ReviewForm />
    </div >
  )
}

export default Reviews
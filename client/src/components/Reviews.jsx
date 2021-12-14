import React, { useEffect } from 'react'
import ReviewForm from './ReviewForm'
import axios from 'axios'

const Reviews = () => {

  const showReviews = async () => {
    const req = await axios.get('localhost:3001/api/reviews')
    req()
  }


  return (
    <div>
      {showReviews()}
      <ReviewForm />
    </div>
  )
} 

  export default Reviews
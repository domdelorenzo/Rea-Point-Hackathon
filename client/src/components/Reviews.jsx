import React, { useEffect } from 'react'
import ReviewForm from './ReviewForm'

const Reviews = () => {

  const showReviews = async () => {
    const req = await axios.get()
  }

  return (
    <div>
      {showReviews()}
      <ReviewForm />
    </div>
  )
} 

  export default Reviews
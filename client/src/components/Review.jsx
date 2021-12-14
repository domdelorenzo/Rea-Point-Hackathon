import React from 'react'

function Reviews(props) {
  
    const handleSubmit = (e) => {
      props.addReview(e)
      props.history.push('/listings')
  
    }
  
      const newReview = props.newReview
      return (
        <div>
        <h1>Reviews</h1>
        <form onSubmit={ handleSubmit }>
            {/* to edit */}
          <input type="text" value={newReview.name} onChange={ props.handleChange} name={'name'} placeholder={'Title'} />
          <input type="text" value={newBoat.img} onChange={ props.handleChange} name={'img'} placeholder={'image'} />
          <input type="text-area" value={newBoat.description} onChange={ props.handleChange} name={'description'} placeholder={'description'} />
          <button>Submit</button>
        </form>
        </div>
      );
  }

export default Reviews
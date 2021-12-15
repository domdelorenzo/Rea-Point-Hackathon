import React, { useState } from "react";
import axios from 'axios'

const ReviewForm = (props) => {

    const [title, setTitle] = useState('')
    const [name, setName] = useState('')
    const [userName, setUserName] = useState('')
    const [description, setDescription] = useState('')
    const [rating, setRating] = useState(0)

    const handleSubmit = async () => {
        const res = await axios.post('localhost:3001/api/reviews')
        console.log(title, userName, description, userName, rating)
        console.log(res)
    }

    return (
        <div className="review-form">
           <h1>Tell us what you thought!</h1>

            <form onSubmit={props.onSubmit}>
                
                <input 
                type="text" 
                value={props.value} 
                onChange={props.onChange} 
                // name={'title'} 
                placeholder={'Give us a short description.'} 
                />

                <input 
                type="text" 
                value={props.value} 
                onChange={props.onChange} 
                name={'name'} 
                placeholder={'Which ride would you like to review?'} 
                />

                <input 
                type="text" 
                value={props.value} 
                onChange={props.onChange} 
                name={'username'} placeholder={'Create a pseudonym'} 
                />

                <input type="text-area" 
                value={props.value} 
                onChange={props.onChange} 
                name={'description'} 
                placeholder={'Describe your experience in detail.'} 
                />

                <input 
                type="integer" 
                value={props.value} 
                onChange={props.onChange} 
                name={'rating'} 
                placeholder={'How would you rate us 1-5?'} 
                />
                
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ReviewForm


{/* <form onSubmit={handleSubmit}>
                
                <input 
                type="text" 
                value={title} 
                onChange={e =>setTitle(e.target.value)} 
                name={'title'} 
                placeholder={'Give us a short description.'} 
                />

                <input 
                type="text" 
                value={name} 
                onChange={e =>setName(e.target.value)} 
                name={'name'} 
                placeholder={'Which ride would you like to review?'} 
                />

                <input 
                type="text" 
                value={userName} 
                onChange={e =>setUserName(e.target.value)} 
                name={'username'} placeholder={'Create a pseudonym'} 
                />
                
                <input type="text-area" value={description} onChange={e =>setDescription(e.target.value)} name={'description'} placeholder={'Describe your experience in detail.'} />
                <input type="integer" value={rating} onChange={e =>setRating(e.target.value)} name={'rating'} placeholder={'How would you rate us 1-5?'} />
                <button type="submit">Submit</button>
            </form> */}
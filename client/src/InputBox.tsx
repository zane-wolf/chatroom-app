import { useState } from "react"




export default function InputBox() {
    const handleChange = (event) => {
        if (event.code === 'Enter') {
            console.log(event)
        }   
    }

    return (
        <div className='input-field-wrapper'>
            <input onKeyDown={handleChange} className='message-input-box'></input>
            <button className='message-input-button'>Send</button>
        </div>
    )
}
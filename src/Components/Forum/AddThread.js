import React, { useState } from 'react'
// import { useHistory } from 'react-router-dom'
import Header from '../Header'

const AddThread = ({ match }) => {
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')
  //const history = useHistory()

  const handleClick = () => {
    console.log(match.params)
    // history.push('/')
  }

  const handleChange = (event) => {
    if(event.target.name === 'title')
      setTitle(event.target.value)
    else
      setMessage(event.target.value)
  }

  return (
    <div>
      <Header />
      <div className='body'>
        <div className='add-box'>
          <input 
            onChange={handleChange}
            value={title}
            className='title-bar'
            type='text'
            name='title'
            placeholder='Title'
          />
          <textarea
            onChange={handleChange}
            value={message}
            className='message-bar'
            name='message'
            type='text-area'
            rows={5}
            placeholder='Message'
          />
          <button style={{ width: '20%', marginLeft: '40%' }} onClick={handleClick}>Add</button>
        </div>
      </div>
    </div>
  )
}

export default AddThread

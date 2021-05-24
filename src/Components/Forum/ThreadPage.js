import React, { useState } from 'react'
import './index.css'
import searchFailed from '../../Assets/searchFailed.svg'
import avatar1 from '../../Assets/bandmember.jpg'
import avatar2 from '../../Assets/avatar_g2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const CommentList = [
  {
    'id': '1',
    'userId': '12345',
    'username': 'Mark',
    'message': 'This is wrong',
    'time': '11:01'
  },
  {
    'id': '2',
    'userId': '12346',
    'username': 'Julie',
    'message': "Can you explain what's wrong?",
    'time': '12:27'
  },
  {
    'id': '3',
    'userId': '12345',
    'username': 'Mark',
    'message': 'Yeah sure',
    'time': '12:43'
  },
  {
    'id': '4',
    'userId': '12345',
    'username': 'Mark',
    'message': 'This is how you do it',
    'time': '2:14'
  },
  {
    'id': '5',
    'userId': '12346',
    'username': 'Julie',
    'message': 'Thanks a lot!',
    'time': '3:02'
  }
]

const ThreadPage = () => {
  const [message, setMessage] = useState('')
  const [image, setImage] = useState(null)
  const commentCard = (comment) => {
    if (comment.userId === '12346') {
      return (
        <div className='commentContainer darker'>
          <img src={avatar2} alt="Avatar" className='right' style={{ width:'100%'}} />
          <p className='right'>{comment.message}</p>
          <span className='time-left'>{comment.time}</span>
        </div>
      )
    }
    return (
      <div className="commentContainer" key={CommentList.id}>
        <img src={avatar1} alt="Avatar" style={{ width:'100%'}} />
        <p style={{ alignItems: 'center' }}>{comment.message}</p>
        <span className="time-right">{comment.time}</span>
      </div>
    )
  }

  const handleUpload = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]))
  }

  const handleChange = (event) => {
    setMessage(event.target.value)
  }

  const handleClick = () => {
    console.log(message)
    console.log(image)
  }

  return (
    <div style={{ height: '100vh', overflow: 'auto', paddingBottom: '20px' }}>
      <div className='login-header' style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1 style={{ color: '#0099ff' }} className='title'>Lazy Reader</h1>
        <h2 style={{ color: '#0099ff', marginRight: '60px', fontWeight: '300' }}>
          <a style={{ textDecoration: 'none' }} href='/'>Logout</a>
        </h2>
      </div>
      <div style={{ height: 'calc(100vh - 300px)', marginBottom: '30px' }}>
        {
          (CommentList.length) ?
            <div className='resultBox'>
              {CommentList.map(commentCard)}
            </div>
          :
          <div>
            <img alt='searchFailed' src={searchFailed} className='search-image' />
            <h1 style={{ textAlign: 'center', color: '#53E3FE' }}>No Messages!</h1>
          </div>
        }
      </div>
      <div>
        <div style={{ width: '80%', marginLeft: '10%', display: 'flex' }}>
          <div className='message-box' style={{ overflow: 'auto' }}>
            <div className='chip' style={{ display: (image !== null) ? 'block' : 'none' }}>
              <img src={image} alt='' style={{ width: '30%' }} />
              <span className="closebtn" onClick={()=> setImage(null)}>&times;</span>
            </div>
            <textarea
              className='message-input'
              placeholder="Send a message..."
              value={message}
              onChange={handleChange}
              // onSubmit={handleSubmit}
            />
            <label htmlFor="upload-button">
              <span className="image-button">
                <FontAwesomeIcon icon={faPaperclip} />
              </span>
            </label>
            <input
              type="file"
              multiple={false}
              id="upload-button"
              style={{ display: 'none' }}
              onChange={handleUpload}
            />
          </div>
          <button style={{ marginTop: '20px' }} type="submit" className="send-button" onClick={handleClick}>
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ThreadPage

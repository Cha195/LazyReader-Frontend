import React, { useState } from 'react'
import './index.css'
import logo from '../../Assets/logo.png'
import searchFailed from '../../Assets/searchFailed.svg'
import avatar from '../../Assets/bandmember.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const CommentList = [
  {
    'id': '1',
    'message': 'This is wrong',
    'time': '11:01'
  },
  {
    'id': '2',
    'message': "Can you explain what's wrong?",
    'time': '12:27'
  },
  {
    'id': '3',
    'message': 'Yeah sure',
    'time': '12:43'
  },
  {
    'id': '4',
    'message': 'This is how you do it',
    'time': '2:14'
  },
  {
    'id': '5',
    'message': 'Thanks a lot!',
    'time': '3:02'
  }
]

const ThreadPage = () => {
  // const {
  //   params: { threadId }
  // } = match
  const [message, setMessage] = useState('')
  const commentCard = (comment) => {
    // if (comment.user.id === user.id) {
    //   return (
    //     <div className="container darker">
    //       <img src="/w3images/avatar_g2.jpg" alt="Avatar" className="right" style={{ width:'100%'}} />
    //       <p>{comment.message}</p>
    //       <span class="time-left">{comment.time}</span>
    //     </div>
    //   )
    // }
    return (
      <div className="commentContainer">
        <img src={avatar} alt="Avatar" style={{ width:'100%'}} />
        <p style={{ alignItems: 'center' }}>{comment.message}</p>
        <span className="time-right">{comment.time}</span>
      </div>
    )
  }

  const handleUpload = (event) => {
    
  }

  const handleChange = (event) => {
    setMessage(event.target.value)
  }

  return (
    <div style={{ maxHeight: '100vh' }}>
      <div className='login-header'>
        <img alt='logo' src={logo} />
        <h1 style={{ color: '#0099ff' }} className='title'>Lazy Reader</h1>
      </div>
      <div className='forum-body' style={{ height: 'calc(100vh - 250px)', marginBottom: '30px' }}>
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
      <div className='message-box'>
        <input
          className="message-input"
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
        <button type="submit" className="send-button">
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
    </div>
  )
}

export default ThreadPage

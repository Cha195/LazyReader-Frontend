import React, { useEffect, useState } from 'react'
import './index.css'
import searchFailed from '../../Assets/searchFailed.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

String.prototype.toHHMMSS = function () {
  var sec_num = parseInt(this, 10); // don't forget the second param
  var hours   = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
  var seconds = sec_num - (hours * 3600) - (minutes * 60);

  if (hours   < 10) {hours   = "0"+hours;}
  if (minutes < 10) {minutes = "0"+minutes;}
  if (seconds < 10) {seconds = "0"+seconds;}
  return hours+':'+minutes+':'+seconds;
}

// const CommentList = [
//   {
//     'id': '1',
//     'userId': '12345',
//     'username': 'Mark',
//     'message': 'This is wrong',
//     'time': '11:01'
//   },
//   {
//     'id': '2',
//     'userId': '12346',
//     'username': 'Julie',
//     'message': "Can you explain what's wrong?",
//     'time': '12:27'
//   },
//   {
//     'id': '3',
//     'userId': '12345',
//     'username': 'Mark',
//     'message': 'Yeah sure',
//     'time': '12:43'
//   },
//   {
//     'id': '4',
//     'userId': '12345',
//     'username': 'Mark',
//     'message': 'This is how you do it',
//     'time': '2:14'
//   },
//   {
//     'id': '5',
//     'userId': '12346',
//     'username': 'Julie',
//     'message': 'Thanks a lot!',
//     'time': '3:02'
//   }
// ]

const ThreadPage = ({ match }) => {
  const {
    params: { courseId, threadId }
  } = match

  const [CommentList, setCommentList] = useState([])
  const [message, setMessage] = useState('')

  useEffect(() => {
    const getData = async () => {
      await fetch(`http://localhost:5000/course/${courseId}/forum/${threadId}`)
      .then((res) => {
        if(res.status === 200) {
          return res.json()
        }
      })
      .then((res) => {
        console.log(res);
        setCommentList(res.map((e) => {
          return {
            name: e.Name,
            message: e.Message,
            time: (e.timeSent.toHHMMSS)
          }
        }))
      })
    }
    getData()
  }, [])

  const commentCard = (comment) => {
    if (comment.userId === '12346') {
      console.log(comment.time)
      return (
        <div className='commentContainer darker'>
          <p className='right'>{comment.message}</p>
          <span className='time-left'>{comment.time}</span>
        </div>
      )
    }
    return (
      <div className="commentContainer" key={CommentList.id}>
        <p style={{ alignItems: 'center' }}>{comment.message}</p>
        <span className="time-right">{comment.time}</span>
      </div>
    )
  }

  const handleChange = (event) => {
    setMessage(event.target.value)
  }

  const handleClick = () => {
    const commentdata = {
      comment: {
        Name: 'Rahul',
        Message: message,
        timeSent:  Date.now()
      }
    }

    fetch(`http://localhost:5000/course/${courseId}/forum/${threadId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(commentdata)
    })
    .then((res) => {
      console.log(res)
    })
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

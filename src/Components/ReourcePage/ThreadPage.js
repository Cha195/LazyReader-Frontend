import React from 'react'
import './index.css'
import logo from '../../Assets/logo.png'
import searchFailed from '../../Assets/searchFailed.svg'
import avatar from '../../Assets/bandmember.jpg'

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

  return (
    <div style={{ maxHeight: '100vh' }}>
      <div className='login-header'>
        <img alt='logo' src={logo} />
        <h1 style={{ color: '#0099ff' }} className='title'>Lazy Reader</h1>
      </div>
      <div className='forum-body'>
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
    </div>
  )
}

export default ThreadPage

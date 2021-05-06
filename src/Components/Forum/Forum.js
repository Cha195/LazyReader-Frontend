import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './index.css'
import logo from '../../Assets/logo.png'
import searchFailed from '../../Assets/searchFailed.svg'

const ThreadList = [
  {
    'id': '1',
    'name': 'Server Pages',
    'comments': '3'
  },
  {
    'id': '2',
    'name': 'JavaFX',
    'comments': '2'
  },
  {
    'id': '3',
    'name': 'JSP doubt!',
    'comments': '4'
  },
  {
    'id': '4',
    'name': 'Help please!',
    'comments': '1'
  },
  {
    'id': '5',
    'name': 'Im gonna cry!',
    'comments': '1'
  }
]

const Forum = () => {
  const history = useHistory()
  const [searchText, setSearchText] = useState('')
  const [threads, setThreads] = useState(ThreadList)
  let threadArray

  const threadCard = (thread) => {
    return (
      <div className='card'>
        <h2>{thread.id} | {thread.name}</h2>
        <div style={{ display: 'flex' }}>
          <h2 style={{ marginRight: '10px' }}>{thread.comments}</h2>
          <Link className='link' to={`./forum/${thread.id}`} type='button'>Open</Link>
        </div>
      </div>
    )
  }

  const handleChange = (event) => {
    setSearchText(event.target.value)
    if(event.target.value === '') {
      setThreads(ThreadList)
    } else {
      threadArray = ThreadList.map(e => {
        const query = event.target.value
        if(e['id'].toLowerCase().includes(query) || e['name'].toLowerCase().includes(query)) {
          return e
        }
        return undefined
      })
      threadArray = threadArray.filter(e => {
        return e !== undefined;
      })
      setThreads(threadArray)
    }
  }

  return (
    <div style={{ maxHeight: '100vh' }}>
      <div className='login-header'>
        <img src={logo} alt='logo'/>
        <h1 style={{ color: '#0099ff' }} className='title'>Lazy Reader</h1>
      </div>
      <div className='forum-body'>
        <div className='search-box'>
          <input 
            type='text' 
            className='search-bar'
            placeholder='Search...'
            onChange={handleChange}
            value={searchText}
          />
          <button onClick={() => history.push('./forum/add')}>New Post</button>
        </div>
        {
          (threads.length) ?
            <div className='resultBox'>
              {threads.map(threadCard)}
            </div>
          :
          <div>
            <img alt='searchFailed' src={searchFailed} className='search-image' />
            <h1 style={{ textAlign: 'center', color: '#53E3FE' }}>No results!</h1>
          </div>
        }
      </div>
    </div>
  )
}

export default Forum

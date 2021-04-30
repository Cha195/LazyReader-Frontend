import React from 'react'
import Header from '../Header'
import Forum from './Forum'

const CoursePage = ({ match }) => {
  const {
    params: { courseId }
  } = match

  const handleClick = () => {
    return (
      <Forum />
    )
  } 

  return (
    <>
      <Header />
      <h1 style={{ marginTop: '150px', textAlign: 'center' }}>{courseId} Java</h1>
      <div className='resultBox'>
        <div className='card'>
          <h2>Book</h2>
          <div>
            <button>View</button>
            <button style={{ marginLeft: '20px' }}>Download</button>
          </div>
        </div>
        <div className='card'>
          <h2>Youtube</h2>
          <button>Play</button>
        </div>
        <div className='card'>
          <h2>Discussion Forum</h2>
          <button onClick={handleClick}>Open</button>
        </div>
      </div>
    </>
  )
}

export default CoursePage

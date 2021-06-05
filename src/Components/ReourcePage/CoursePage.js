import React from 'react'
import Header from '../Header'
import { Link, useLocation } from 'react-router-dom'

const CoursePage = ({ match }) => {
  const {
    params: { courseId }
  } = match
  const location = useLocation()
  const { courseName, bookName, bookLink } = location.state

  const viewBook = () => {
    window.open('' + bookLink)
  }

  // const downloadBook = () => {

  // }

  return (
    <>
      <Header />
      <h1 style={{ marginTop: '150px', textAlign: 'center' }}>{courseId} {courseName}</h1>
      <div className='resultBox'>
        <div className='card'>
          <h2>{bookName}</h2>
          <div>
            <button onClick={viewBook}>View</button>
            {/* <button onClick={downloadBook} style={{ marginLeft: '20px' }}>Download</button> */}
          </div>
        </div>
        <div className='card'>
          <h2>Youtube</h2>
          <button>Play</button>
        </div>
        <div className='card'>
          <h2>Discussion Forum</h2>
          <Link className='link' to={`./${courseId}/forum`} type='button'>Open</Link>
        </div>
      </div>
    </>
  )
}

export default CoursePage

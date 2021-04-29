import React, { useState } from 'react'
import Header from '../Header'
import './index.css'
import search from '../../Assets/search.svg'
import searchFailed from '../../Assets/searchFailed.svg'

const courseList = [
  {
    'id': 'CSE1007',
    'name': 'Java'
  },
  {
    'id': 'CSE3001',
    'name': 'Software Engineering'
  },
  {
    'id': 'CSE2004',
    'name': 'Database Management System'
  },
  {
    'id': 'CSE1004',
    'name': 'Network And Communication'
  }
]

const SearchPage = () => {
  const [searchText, setSearchText] = useState('')
  const [courses, setCourses] = useState([])

  const courseCard = (course) => {
    return (
      <div className='card'>
        <h2>{course.id} {course.name}</h2>
        <a href={`/${course.id}`} type='button'>View</a>
      </div>
    )
  }
  let courseArray
  const handleChange = (event) => {
    setSearchText(event.target.value)
    courseArray = courseList.map(element => {
      console.log(element['id'])
      if(element['id'].toLowerCase().includes(event.target.value) || element['name'].toLowerCase().includes(event.target.value)) {
        return element
      }
    })
    courseArray = courseArray.filter(element => {
      return element !== undefined;
   })
    console.log(courseArray)
    setCourses(courseArray)
  }

  return (
      <div style={{ maxHeight: '100vh' }}>
        <Header />
        <div className='body'>
          <div className='search-box'>
            <input 
              type='text' 
              className='search-bar'
              placeholder='Search...'
              onChange={handleChange}
              value={searchText}
            />
          </div>
          {
            (searchText == '') ? 
            <div>
              <img src={search} className='search-image' />
              <h1 style={{ textAlign: 'center', color: '#53E3FE' }}>Start searching!</h1>
            </div>
            :
              (courses.length) ?
                <div>
                  {courses.map(courseCard)}
                </div>
              :
              <div>
                <img src={searchFailed} className='search-image' />
                <h1 style={{ textAlign: 'center', color: '#53E3FE' }}>No results!</h1>
              </div>
          }
        </div>
      </div>
  )
}

export default SearchPage

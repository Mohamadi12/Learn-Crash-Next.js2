"use client"
import React, { useEffect, useState } from 'react'
import Courses from './components/Courses'
import LoadingPage from './loading'
import CourseSearch from './components/CourseSearch'

const HomePage = () => {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() =>{
    const fetchCourses = async () =>{
      const res = await fetch('/api/courses')
      const data = await res.json()
      setCourses(data)
      setLoading(false)
    }

    fetchCourses()
  },[])

  if(loading){
    return <LoadingPage/>
  }
  return (
    <div>
      <h1>Welcome To Travel Media</h1>
      <CourseSearch getSearchResults={(results) =>setCourses(results)}/>
      <Courses courses={courses}/>
    </div>
  )
}

export default HomePage

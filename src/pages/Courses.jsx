import React from 'react'
import Card from '../components/Card'
import CoursesSearch from '../components/CoursesSearch'
import CoursesTop from '../components/CoursesTop'

function Courses() {
  return (
    <section className="pt-28 pb-16 bg-gray-50">
      <CoursesTop/>
      <CoursesSearch/>
      <Card/>
    </section>
  )
}

export default Courses

import React from 'react'

import CoursesSearch from '../components/CoursesSearch'
import CoursesTop from '../components/CoursesTop'
import CoursesCard from '../components/CoursesCard.jsx'

function Courses() {
  return (
    <section className="pt-28 pb-16 bg-gray-50">
      <CoursesTop/>
      <CoursesSearch/>
      <CoursesCard/>
    </section>
  )
}

export default Courses

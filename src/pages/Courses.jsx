import React from 'react'

import CoursesSearch from '../components/CoursesSearch'
import CoursesTop from '../components/CoursesTop'
import Card from '../components/Card'

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

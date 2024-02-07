import courses from '../data/courses'
import Course from './course/Course'

const Courses = () => {
  return (
    <>
      <h1>Courses</h1>
      {courses.map((course) => {
        return <Course key={course.id} {...course} />
      })}
    </>
  )
}

export default Courses

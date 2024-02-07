import { Link } from 'react-router-dom'
import courses from '../data/courses'

const Courses = () => {
  return (
    <div>
      <h1>Courses</h1>
      {courses.map((course) => (
        <div key={course.id}>
          <Link to={course.slug} className="courseLink">
            {course.title}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Courses

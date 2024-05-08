import { Link, useLocation } from 'react-router-dom'
import courses from '../data/courses'
import queryString from 'query-string'

const Courses = () => {
  const location = useLocation()
  const parsed = queryString.parse(location.search)
  console.log(parsed)
  let coursesSort = courses.sort()

  if (parsed === { 'title' }) {
    console.log('fuck')
  }
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

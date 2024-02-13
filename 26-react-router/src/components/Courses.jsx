import { Link, useLocation, useNavigate } from 'react-router-dom'
import courses from '../data/courses'
import queryString from 'query-string'
import { useEffect, useState } from 'react'

const SORT_KEYS = ['title', 'slag', 'id']

function sortCourses(courses, key) {
  const sortedCourses = [...courses]

  if (!key || !SORT_KEYS.includes(key)) {
    return sortedCourses
  }
  sortedCourses.sort((a, b) => (a[key] > b[key] ? 1 : -1))
  return sortedCourses
}

const Courses = () => {
  const location = useLocation()
  const query = queryString.parse(location.search)
  const navigate = useNavigate()
  const [sortKey, setSortKey] = useState(query.sort)
  const [sortedCourses, setSortedCourses] = useState(
    sortCourses(courses, sortKey)
  )

  useEffect(() => {
    if (!SORT_KEYS.includes(sortKey)) {
      navigate('.')
      setSortKey()
      setSortedCourses([...courses])
    }
  }, [sortKey, navigate])

  return (
    <>
      <h1>{sortKey ? `Courses sorted by ${sortKey}` : 'Courses'} </h1>
      {sortedCourses.map((course) => (
        <div key={course.id}>
          <Link to={course.slag} className="courseLink">
            {course.title}
          </Link>
        </div>
      ))}
    </>
  )
}

export default Courses

// import { Link, useLocation } from 'react-router-dom'
// import courses from '../data/courses'
// import queryString from 'query-string'

// const Courses = () => {
//   const location = useLocation()
//   const parsed = queryString.parse(location.search)
//   const parseValue = parsed.sort

//   return (
//     <div>
//       {parseValue === 'title' ||
//       parseValue === 'slag' ||
//       parseValue === 'id' ? (
//         <h1 style={{ textTransform: 'capitalize' }}>{parseValue}</h1>
//       ) : (
//         <h1>Courses</h1>
//       )}

//       {courses.map((course, index) => (
//         <div key={index}>
//           <Link to={course.slag} className="courseLink">
//             {course[parseValue] || course.title}
//           </Link>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default Courses

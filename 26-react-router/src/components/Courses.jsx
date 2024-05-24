import { Link, useLocation, useNavigate } from 'react-router-dom'
import courses from '../data/courses'
import queryString from 'query-string'
import { useEffect, useState } from 'react'

const SORT_KEYS = ['title', 'slug', 'id']

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
  const [selectedOption, setSelectedOption] = useState(sortKey)

  const [sortedCourses, setSortedCourses] = useState(
    sortCourses(courses, sortKey)
  )

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value)
    setSortKey(selectedOption)
  }

  // useEffect(() => {
  //   if (selectedOption) {
  //     navigate(`?sort=${selectedOption}`)
  //     setSortedCourses(sortCourses(courses, selectedOption))
  //   }
  // }, [selectedOption, navigate])

  useEffect(() => {
    if (!SORT_KEYS.includes(sortKey)) {
      navigate('.')
      setSortKey()
      setSelectedOption()
      setSortedCourses([...courses])
    }
  }, [sortKey, navigate])

  return (
    <>
      <h1>
        {selectedOption ? `Courses sorted by ${selectedOption}` : 'Courses'}
      </h1>
      {sortedCourses.map((course) => (
        <div key={course.id}>
          <Link to={course.slug} className="courseLink">
            {course.title}
          </Link>
        </div>
      ))}
      <select value={selectedOption} onChange={handleOptionChange}>
        {SORT_KEYS.map((e, index) => (
          <option key={index} value={e}>
            {e}
          </option>
        ))}
      </select>
    </>
  )
}

export default Courses

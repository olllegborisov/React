import { useParams, useNavigate, Link, useLocation } from 'react-router-dom'
import courses from '../data/courses'
// import NotFound from './NotFound'
import { useEffect } from 'react'

const SingleCourses = () => {
  const params = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location)
  const course = courses.find((course) => course.slug === params.courseSlag)
  useEffect(() => {
    if (!course) {
      navigate('..', { relative: 'path' })
    }
  }, [course, navigate])
  // Simply show Not Found component
  //   if (!course) {
  //     return <NotFound />
  //   }

  return (
    <>
      <h1>{course?.title}</h1>
      <h2>{course?.slug}</h2>
      <h3>{course?.id}</h3>
      <Link to=".." relative="path">
        All courses
      </Link>
    </>
  )
}

export default SingleCourses

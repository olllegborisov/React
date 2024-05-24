import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import queryString from 'query-string'
import someInfo from '../data/info'

function sortInfo(key) {
  const sortInfo = [...someInfo]
  sortInfo.sort((a, b) => (a[key] > b[key] ? 1 : -1))
  return sortInfo
}

const Info = () => {
  const location = useLocation()
  const query = queryString.parse(location.search)
  const [info] = useState(sortInfo(query.sort))

  return (
    <>
      <h1>Info</h1>
      {info.map((info) => (
        <Link to={info.slug} key={info.id}>
          {info.title}
        </Link>
      ))}
    </>
  )
}

export default Info

import { Link, useParams } from 'react-router-dom'
import someInfo from '../data/info'
import NotFound from './NotFound'

function SingleInfo() {
  const param = useParams()
  console.log(param)
  const info = someInfo.find((info) => info.slug === param.infoSlag)

  if (!info) {
    return <NotFound />
  }

  return (
    <>
      <h1>{info.title}</h1>
      <Link to=".." relative="path">
        Back
      </Link>
    </>
  )
}

export default SingleInfo

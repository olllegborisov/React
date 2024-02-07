import { Link } from 'react-router-dom'
import styles from './Course.module.css'

function Course(props) {
  const { title, slug } = props
  return (
    <div>
      <Link to={slug} className={styles.course}>
        {title} {slug}
      </Link>
      <br />
    </div>
  )
}

export default Course

import { useEffect, useState } from 'react'
import Post from './Post'

function Posts() {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsloading] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((posts) => setPosts(posts))
      .catch((error) => setError(error.message))
      .finally(() => setIsloading(false))
  }, [])

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>Error: {error}</h1>
  }

  return (
    <div>
      {posts.map((post) => {
        return <Post {...post} key={post.id} />
      })}
    </div>
  )
}

export default Posts

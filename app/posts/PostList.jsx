import LikeButton from './LikeButton'
import Link from 'next/link'

const fetchPosts = async () => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60
    }
  })
    .then(res => res.json())
}

export default async function PostList () {
  const posts = await fetchPosts()

  return posts.slice(0, 5).map((post) => (
    <article key={post.id}>
      <Link href={`/posts/${post.id}`}>
        <h2 style={{ color: '#09f' }}>{post.title}</h2>
        <p>{post.body}</p>
        <LikeButton />
      </Link>
    </article>
  ))
}

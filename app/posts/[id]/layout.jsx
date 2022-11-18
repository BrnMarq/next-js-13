import Link from 'next/link'

const fetchPostDetail = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 60
      }
    })
    .then(res => res.json())
}

export default async function PostDetailLayout ({ params, children }) {
  const { id } = params
  const post = await fetchPostDetail(id)

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link href={`/posts/${post.id}/comments`}>Ver comentarios</Link>
      {children}
    </article>
  )
}

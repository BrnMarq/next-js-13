import Image from 'next/image'

const fetchComments = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 2000))
  // throw new Error('Error al cargar los comentarios')
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`,
    {
      next: {
        revalidate: 60
      }
    })
    .then(res => res.json())
}

export default async function PostComments ({ params }) {
  const { id } = params
  const comments = await fetchComments(id)

  return (
    <ul style={{ background: '#444', fontSize: '12px', paddingTop: '10px', paddingBottom: '10px' }}>
      {comments.map(comment => (
        <li key={comment.id}>
          <Image width={100} height={100} alt={comment.name} src={`https://avatars.dicebear.com/api/adventurer-neutral/${comment.email}.svg`} />
          <h2>{comment.name}</h2>
          <p>{comment.body}</p>
        </li>
      ))}
    </ul>
  )
}

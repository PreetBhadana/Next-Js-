import { comment } from 'postcss'
import { useState } from 'react'
import { comments } from '../../components/data/coments'

function CommentsPage() {
  const [ comments, setComments ] = useState([])
  const [comment, setComment ] = useState('')

  const fetchComments = async () => {
    const res = await fetch('/api/comments')
    const data = await res.json()
    setComments(data)
  }

  const addComment = async () => {
    const res = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        comment
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json()
    console.log(data)
    fetchComments()
  }

  const deleteComment = async (commentId) => {
    const res = await fetch(`/api/comments/${commentId}`, {
      method: 'DELETE'
    })
    const data = await res.json()
    console.log(data)
    fetchComments()
  }

  return (
    <>
      <input type = "text" value={comment} onChange={(e) => setComment(e.target.value)}></input>
      <button onClick={(e) => addComment()}> Add comment </button>
      <button onClick={() => fetchComments()}> Fetch Comments </button>
      {
        comments.map((comment) => {
          return(
            <ul key={comment.id}>
              <li>{comment.id} | {comment.comment} | <button onClick={() => deleteComment(comment.id)}>Delete {comment.id}</button></li>
            </ul>
          )
        })
      }
    </>
  );
}

export default CommentsPage;
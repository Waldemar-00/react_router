import { useState, useEffect, useCallback } from 'react' 
import  useHttp from '../../hooks/use-http'
import { getComments } from'../../utils/firebase-api'
import styles from './Comments.module.css' 
import NewCommentForm from './NewCommentForm'
import { useParams } from 'react-router-dom'
import Loader from '../UI/Loader'
import CommentsList from './CommentsList'

const Comments = () => {
  const [isComment, setComment] = useState(false) 
  const { sendHttpRequest, data, status } = useHttp(getComments)
  const id = useParams().key
  console.log(id)
  useEffect(() => {
    sendHttpRequest(id)
  }, [sendHttpRequest, id])
  const startAddCommentHandler = () => {
    setComment(true) 
  } 
  const onAddedComment = useCallback(() => {
    sendHttpRequest(id)
  }, [sendHttpRequest, id])
  return (
    <section className={styles.comments}>
      <h2>User Comments</h2>
      {
        !isComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )
      }
      {
        isComment && <NewCommentForm onAddedComment={onAddedComment} />
      }
      {
        status === 'pending' ? <Loader />
          : status === 'completed' && data.length > 0 ? <CommentsList data={data}/>
            : <p>No comments yet...</p>
      }
      
    </section>
  ) 
} 

export default Comments 

import { useRef, useEffect } from 'react' 
import styles from './NewCommentForm.module.css' 
import useHttp from '../../hooks/use-http'
import { addComment } from '../../utils/firebase-api'
import { useParams } from 'react-router-dom'
import Loader from '../UI/Loader'

const NewCommentForm = ({ onAddedComment }) => {
  const comment = useRef() 
  const id = useParams().key
  const { sendHttpRequest, error, status } = useHttp(addComment)
  useEffect(() => {
    if (status === 'completed' && !error) onAddedComment() 
  }, [error, status, onAddedComment, id])
  const submitFormHandler = (event) => {
    event.preventDefault() 
    sendHttpRequest({ id, comment: comment.current.value })
    document.querySelector('form').reset()
  } 

  return (
    <form className={styles.form} onSubmit={submitFormHandler}>
      { status === 'pending' && <Loader/> }
      <div className={styles.control} onSubmit={submitFormHandler}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' rows='5' ref={comment}></textarea>
      </div>
      <div className={styles.actions}>
        <button className='btn'>Add Comment</button>
      </div>
    </form>
  ) 
} 

export default NewCommentForm 

import CommentItem from './CommentItem' 
import styles from './CommentsList.module.css' 

const CommentsList = ({ data }) => {
  return (
    <ul className={styles.comments}>
      {data.map((comment) => (
        <CommentItem key={comment.id} comment={comment.comment} />
      ))}
    </ul>
  ) 
} 

export default CommentsList 

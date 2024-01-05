import styles from './CommentItem.module.css' 

const CommentItem = ({comment}) => {
  return (
    <li className={styles.item}>
      <p>{comment}</p>
    </li>
  ) 
} 

export default CommentItem 

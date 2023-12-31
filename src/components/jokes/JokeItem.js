import styles from './JokeItem.module.css' 
import { Link } from 'react-router-dom'

const JokeItem = ({ id, type, setup }) => {
  return (
    <li className={styles.item} id={id}>
      <figure>
        <blockquote>
          <p>{setup}</p>
        </blockquote>
        <figcaption>{type}</figcaption>
      </figure>
      <Link to={`/jokes/${id}`} className='btn'>Expand</Link>
    </li>
  ) 
} 

export default JokeItem 

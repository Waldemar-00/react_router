import styles from './JokeItem.module.css' 
import { Link } from 'react-router-dom'
const JokeItem = ({id, type, setup, punchline}) => {
  return (
    <li className={styles.item} id={id}>
      <figure>
        <blockquote>
          <p>{setup}</p>
          <p>{punchline}</p>
        </blockquote>
        <figcaption>{type}</figcaption>
      </figure>
      <Link to='' className='btn'>Expand</Link>
    </li>
  ) 
} 

export default JokeItem 

import styles from './JokeItem.module.css' 
import { Link, useRouteMatch } from 'react-router-dom'

const JokeItem = ({ id, type, setup }) => {
  const routeMatch = useRouteMatch()
  return (
    <li className={styles.item} id={id}>
      <figure>
        <blockquote>
          <p>{setup}</p>
        </blockquote>
        <figcaption>{type}</figcaption>
      </figure>
      <Link to={`${routeMatch.url}/${id}`} className='btn'>Expand</Link>
    </li>
  ) 
} 

export default JokeItem 

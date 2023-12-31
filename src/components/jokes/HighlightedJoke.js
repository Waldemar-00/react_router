import styles from './HighlightedJoke.module.css' 

const HighlightedJoke = ({joke}) => {
  return (
    <figure className={styles.joke}>
      <p>{joke.setup}</p>
      <p>{joke.punchline}</p>
      <figcaption>{joke.type}</figcaption>
    </figure>
  ) 
} 

export default HighlightedJoke 

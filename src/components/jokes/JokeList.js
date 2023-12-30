import JokeItem from './JokeItem' 
import styles from './JokeList.module.css' 

const JokeList = ({ jokes }) => {
  return (
      <ul className={styles.list}>
        {jokes.map((joke) => (
          <JokeItem
            key={joke.id}
            id={joke.id}
            type={joke.type}
            setup={joke.setup}
            punchline={joke.punchline}
          />
        ))}
      </ul>
  ) 
} 

export default JokeList 

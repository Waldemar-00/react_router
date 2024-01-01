import JokeItem from './JokeItem' 
import styles from './JokeList.module.css' 
import { useHistory, useLocation } from 'react-router-dom'

const JokeList = ({ jokes }) => {
  const history = useHistory()
  const locationParamSort = new URLSearchParams(useLocation().search).get('sort')
  const isParamSortAsc = locationParamSort === 'asc'
  
  function sortJokes(jokes, isParamSortAsc) {
    jokes.sort((joke1, joke2) => {
      if (isParamSortAsc) {
        return joke1.id > joke2.id ? 1 : -1
      } else if (!isParamSortAsc) {
        return joke1.id > joke2.id ? -1 : 1
      }
      return 0
    })
  }
  sortJokes(jokes, isParamSortAsc)
  function onSortJokesHandler() {
    isParamSortAsc
      ? history.push('/jokes?sort=' + 'desc')
      : history.push('/jokes?sort=' + 'asc')
    sortJokes(jokes, isParamSortAsc)
  }
  return (
    <>
      <div className={styles.sort}>
        <button
          type="button"
          onClick={onSortJokesHandler}
        >
          Sort Jokes {
            isParamSortAsc
            ? 'Descending'
            : 'Ascending'
          }
        </button>
      </div>
      <ul className={styles.list}>
        {jokes.map( joke => (
          <JokeItem
            key={joke.id}
            id={joke.id}
            type={joke.type}
            setup={joke.setup}
            punchline={joke.punchline}
          />
        ))}
      </ul>
    </>
  ) 
} 

export default JokeList 

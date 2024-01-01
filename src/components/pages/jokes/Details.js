import { useParams, Route, Link } from 'react-router-dom'
import Comments from '../../comments/Comments'
import { objectWithjokes } from './data-jokes'
import HighlightedJoke from '../../jokes/HighlightedJoke'
import Found404 from './404'
const Details = () => {
  const joke = useParams()
  const foundJokeObject = objectWithjokes.find(obj => obj.id === joke.key)
  return (
    foundJokeObject ?
      <>
      <h1>Details!</h1>
        <HighlightedJoke joke={foundJokeObject} />
        <Route path={`/jokes/${joke.key}`} exact>
          <Link className='btn--empty' to={`/jokes/${joke.key}/comments`}>
            Show comments
          </Link>
        </Route>
      <Route path={`/jokes/${joke.key}/comments`}>
        <Comments/>
      </Route>
      </>
      :
      <Found404 />
  )
}
export default Details
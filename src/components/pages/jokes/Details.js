import { useParams, Route } from 'react-router-dom'
import Comments from '../../comments/Comments'
import { objectWithjokes } from './data-jokes'
import HighlightedJoke from '../../jokes/HighlightedJoke'
const Details = () => {
  const joke = useParams()
  const foundJokeObject = objectWithjokes.find(obj => obj.id === joke.key)
  return (
    <>
      <h1>Details!</h1>
      <HighlightedJoke joke={foundJokeObject}/>
      <Route path={`/jokes/${joke.key}/comments`}>
        <Comments/>
      </Route>
    </>
  )
}
export default Details
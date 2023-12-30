import { useParams, Route } from 'react-router-dom'
import Comments from '../../comments/Comments'
const Details = () => {
  const joke = useParams()
  return (
    <>
      <h1>Jokes details page!</h1>
      <h2>{joke.key}</h2>
      <Route path={`/jokes/${joke.key}/comments`}>
        <Comments/>
      </Route>
    </>
  )
}
export default Details
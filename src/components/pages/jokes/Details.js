import { useParams, Route, Link, useRouteMatch } from 'react-router-dom'
import Comments from '../../comments/Comments'
import { objectWithjokes } from './data-jokes'
import HighlightedJoke from '../../jokes/HighlightedJoke'
import Found404 from './404'
const Details = () => {
  const routeMatch = useRouteMatch() //! object with keys: path, url, isExact and params(is object)
  console.log(routeMatch, 'useRouteMatch')
  const joke = useParams() //! {key: value} key from Route, value from Link
  const foundJokeObject = objectWithjokes.find(obj => obj.id === joke.key)
  return (
    foundJokeObject ?
      <>
      <h1>Details!</h1>
        <HighlightedJoke joke={foundJokeObject} />
        <Route path={`${routeMatch.path}`} exact>
          <Link className='btn--empty' to={`${routeMatch.url}/comments`}>
            Show comments
          </Link>
        </Route>
      <Route path={`${routeMatch.path}/comments`}>
        <Comments/>
      </Route>
      </>
      :
      <Found404 />
  )
}
export default Details
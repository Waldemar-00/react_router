import { useParams, Route, Link, useRouteMatch } from 'react-router-dom'
import Comments from '../../comments/Comments'
import HighlightedJoke from '../../jokes/HighlightedJoke'
import Loader from '../../UI/Loader'
import useHttp from '../../../hooks/use-http'
import { getJoke } from '../../../utils/firebase-api'
import { useEffect } from 'react'
const Details = () => {
  const { sendHttpRequest, data: joke, error, status } = useHttp(getJoke)
  const id = useParams().key //! {key: value} key from Route, value from Link
  useEffect(() => {
    sendHttpRequest(id)
  }, [sendHttpRequest, id])
  const routeMatch = useRouteMatch() //! object with keys: path, url, isExact and params(is object)
  return (
    <>
      {
        status === 'pending' ? <Loader /> :
          !joke ? <h3 className='focused'>Joke was not found!</h3> :
          error ? <h3 className='focused'>{error}</h3> :
            <>
              <h1>Details!</h1>
              <HighlightedJoke joke={joke} />
                <Route path={`${routeMatch.path}`} exact>
                  <Link className='btn--empty' to={`${routeMatch.url}/comments`}>
                    Show comments
                  </Link>
                </Route>
              <Route path={`${routeMatch.path}/comments`}>
                <Comments/>
              </Route>
            </>
      }
    </>
  )
}
export default Details
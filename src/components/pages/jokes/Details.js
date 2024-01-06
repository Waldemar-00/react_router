import { useParams, Link } from 'react-router-dom'
import HighlightedJoke from '../../jokes/HighlightedJoke'
import Loader from '../../UI/Loader'
import useHttp from '../../../hooks/use-http'
import { getJoke } from '../../../utils/firebase-api'
import { useEffect } from 'react'
const Details = () => {
  const { sendHttpRequest, data: joke, error, status } = useHttp(getJoke)
  let id = useParams().key //! {key: value} key from Route, value from Link
  useEffect(() => {
    sendHttpRequest(id)
  }, [sendHttpRequest, id])
  return (
    <>
      {
        status === 'pending' ? <Loader /> :
          !joke ? <h3 className='focused'>Joke was not found!</h3> :
          error ? <h3 className='focused'>{error}</h3> :
            <>
              <h1>Details!</h1>
                <HighlightedJoke joke={joke} />
                <Link className='btn--empty' to={`/jokes/${id}/comments`} state={{id: id}}>
                  Show comments
                </Link>
            </>
      }
    </>
  )
}
export default Details
import JokeList from '../../jokes/JokeList'
import useHttp from '../../../hooks/use-http'
import { getJokes } from '../../../utils/firebase-api'
import { useEffect } from 'react'
import Loader from '../../UI/Loader'
import styles from '../../UI/Loader.module.css'
import NoJokesFound from '../../jokes/NoJokesFound'

const Jokes = () => {
  const { sendHttpRequest, data: jokes, error, status } = useHttp(getJokes)
  useEffect(() => {
    sendHttpRequest()
  }, [sendHttpRequest])
  return (
    <>
      <h1>Jokes</h1>
      {
        status === 'pending' && (
        <div className={styles.loading}>
          <Loader />
        </div>
        )
      }
      {
        error && <h3 className='focused'>{ error }</h3>
      }
      {
        (!jokes || jokes.length === 0) ? <NoJokesFound /> : <JokeList jokes={jokes} />
      }
    </>
  )
}
export default Jokes
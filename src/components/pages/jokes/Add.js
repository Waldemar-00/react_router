import JokeForm from '../../jokes/JokeForm'
import { useNavigate } from 'react-router-dom'
import useHttp from '../../../hooks/use-http'
import { addJoke } from '../../../utils/firebase-api'
import { useEffect } from 'react'
const Add = () => {
  const history = useNavigate()
  const { sendHttpRequest, status } = useHttp(addJoke)
  useEffect(() => {
    if (status === 'completed') {
      history('jokes')
    }
  }, [history, status])
  const onAddJokeHandle = (joke) => { //! { type, setup, punchline }
    sendHttpRequest(joke)
  }
  return (
    <>
      <h1>Add joke!</h1>
      <JokeForm
        isLoading={status === 'pending'}
        onAddJoke={onAddJokeHandle}
      />
    </>
  )
}
export default Add
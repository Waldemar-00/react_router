import JokeForm from '../../jokes/JokeForm'
import { objectWithjokes } from './data-jokes'
import { useHistory } from 'react-router-dom'
const Add = () => {
  const history = useHistory()
  const onAddJokeHandle = (joke) => { //! { type, setup, punchline }
    objectWithjokes.push(joke)
    history.push('/jokes')
  }
  return (
    <>
      <h1>Add joke!</h1>
      <JokeForm onAddJoke={onAddJokeHandle}/>
    </>
  )
}
export default Add
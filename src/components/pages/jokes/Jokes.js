import { objectWithjokes } from './data-jokes'
import JokeList from '../../jokes/JokeList'
const Jokes = () => {
  return (
    <>
      <h1>Jokes</h1>
      <JokeList jokes={ objectWithjokes }/>
    </>
  )
}
export default Jokes
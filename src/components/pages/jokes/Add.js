import JokeForm from '../../jokes/JokeForm'
const Add = () => {
  const onAddJokeHandle = (joke) => {
    console.log(joke)
  }
  return (
    <>
      <h1>Add joke!</h1>
      <JokeForm onAddJoke={onAddJokeHandle}/>
    </>
  )
}
export default Add
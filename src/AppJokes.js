import { Route, Switch } from 'react-router-dom'
const AppJokes = () => {
  return (
    <>
      <h1>App for Jokes from Server!</h1>
      <Switch>
        <Route path='/jokes'>

        </Route>
        <Route path='/jokes/:jokeKey'>

        </Route>
        <Route path='/jokes-add'>

        </Route>
      </Switch>
    </>
  )
}
export default AppJokes
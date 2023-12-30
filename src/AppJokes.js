import { Route, Switch, Redirect } from 'react-router-dom'
import Jokes from './components/pages/jokes/Jokes'
import Details from './components/pages/jokes/Details'
import Add from './components/pages/jokes/Add'
const AppJokes = () => {
  return (
      <Switch>
        <Route path='/' exact>
          <Redirect to='/jokes'/>
        </Route>
        <Route path='/jokes' exact>
          <Jokes/>
        </Route>
        <Route path='/jokes/:key'>
          <Details/>
        </Route>
        <Route path='/jokes-add'>
          <Add/>
        </Route>
      </Switch>
  )
}
export default AppJokes
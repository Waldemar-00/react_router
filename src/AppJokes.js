import { Route, Switch, Redirect } from 'react-router-dom'
import Jokes from './components/pages/jokes/Jokes'
import Details from './components/pages/jokes/Details'
import Add from './components/pages/jokes/Add'
import Layout from './components/layout/Layout'
import Found404 from './components/pages/jokes/404' 
const AppJokes = () => {
  return (
      <Layout>
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
        <Route path='*'>
          <Found404/>
        </Route>
        </Switch>
      </Layout>
  )
}
export default AppJokes
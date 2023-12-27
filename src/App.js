import Start from './components/pages/Start'
import Home from './components/pages/Home'
import About from'./components/pages/About'
import { Route } from 'react-router-dom'
function App() {
  return (
    <div>
      <Route path='/'>
        <Start/>
      </Route>
      <Route path='/home'>
        <Home/>
      </Route>
      <Route path='/about'>
        <About/>
      </Route>
    </div> 
  )
}
export default App 

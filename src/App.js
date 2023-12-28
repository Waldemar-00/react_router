import Start from './components/pages/Start'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Header from './components/Header'
import { Route } from 'react-router-dom'
function App() {
  return (
    <div>
      <Header />
      <main>
        <Route path='/start'>
          <Start/>
        </Route>
        <Route path='/home'>
          <Home/>
        </Route>
        <Route path='/about'>
          <About/>
          </Route>
      </main>
    </div> 
  )
}
export default App 

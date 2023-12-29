import Start from './components/pages/Start'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Header from './components/Header'
import ContactUs from './components/pages/ContactUs'
import Articles from './components/pages/Articles'
import ArticlesDetails from './components/pages/ArticleDetails'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div>
      <Header />
      <main>
        <Switch> { /*ONLY TO USE ONE ROUTE*/}
          <Route path='/start'>
            <Start/>
          </Route>
          <Route path='/home'>
            <Home/>
          </Route>
          <Route path='/about'>
            <About/>
          </Route>
          <Route path='/articles' exact> {/*ONLY exact url*/}
            <Articles/>
          </Route>
          <Route path='/article/:property'>
            <ArticlesDetails />
          </Route>
          <Route path='/contact'>
            <ContactUs />
            </Route>
        </Switch>
      </main>
    </div> 
  )
}
export default App 

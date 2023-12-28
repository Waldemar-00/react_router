import Start from './components/pages/Start'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Header from './components/Header'
import ContactUs from './components/pages/ContactUs'
import Articles from './components/pages/Articles'
import ArticlesDetails from './components/pages/ArticleDetails'
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
        <Route path='/article'>
          <Articles/>
        </Route>
        <Route path='/article-details/:articleId'>
          <ArticlesDetails />
        </Route>
        <Route path='/contact'>
          <ContactUs />
        </Route>
      </main>
    </div> 
  )
}
export default App 

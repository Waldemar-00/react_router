import Start from './components/pages/Start'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Header from './components/Header'
import ContactUs from './components/pages/ContactUs'
import Articles from './components/pages/Articles'
import ArticlesDetails from './components/pages/ArticleDetails'
import { Route, Routes } from 'react-router-dom'
import Form from './components/pages/Form'
function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route index element={<Start />}/>
          <Route path='home' element={<Home />}/>
          <Route path='about' element={<About />}/>
          <Route path='articles' element={<Articles/>}/>
          <Route path='article/:property' element={<ArticlesDetails />}/>
          <Route path='contact' element={<ContactUs />} />
          <Route path='user' element={<Form />} />
        </Routes>
      </main>
    </div> 
  )
}
export default App 

import Start from './components/pages/Start'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Header from './components/Header'
import ContactUs from './components/pages/ContactUs'
import Articles from './components/pages/Articles'
import ArticlesDetails from './components/pages/ArticleDetails'
import { Route, Routes, Navigate } from 'react-router-dom'
import Form from './components/pages/Form'
function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path='start' element={<Start />}/>
          <Route path='home' element={<Home />}/>
          <Route path='about' element={<About />}/>
          <Route path='articles' element={<Articles/>}/>
          <Route path='article/:property' element={<ArticlesDetails />}/>
          <Route path='contact' element={<ContactUs />} />
          <Route path='start/user' element={<Form />} />
          <Route path='*' element={<Navigate to='start' />} />
          { /* other props: replace={true} - history replace; state={{data:[]} - to transfer data }*/}
        </Routes>
      </main>
    </div> 
  )
}
export default App 

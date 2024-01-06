import { Route, Routes, Navigate, useLocation } from 'react-router-dom'
import Jokes from './components/pages/jokes/Jokes'
import Details from './components/pages/jokes/Details'
import Add from './components/pages/jokes/Add'
import Layout from './components/layout/Layout'
import Found404 from './components/pages/jokes/404' 
import Comments from './components/comments/Comments'
const AppJokes = () => {
  const id = useLocation().state
  return (
      <Layout>
        <Routes>
        <Route path='jokes' element={ <Jokes /> } />
        <Route path='jokes/:key' element={<Details />}/>
        <Route path={`/jokes/${id}/comments`} element={<Comments />} />
        <Route path='jokes-add' element={ <Add /> } />
        <Route path='*' element={ <Found404 /> } />
        <Route path='/' element={ <Navigate to='jokes' /> } />
        </Routes>
      </Layout>
  )
}
export default AppJokes
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
      <h1>Home Page!</h1>
      <Link to='/articles'>Article</Link>
    </>
  )
}
export default Home
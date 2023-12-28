import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header>
      <ul>
        <li><Link to="/start">Start</Link></li>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </header>
  )
}
export default Header
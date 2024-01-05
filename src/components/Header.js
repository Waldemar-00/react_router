import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'
const Header = () => {
  return (
    <header className={styles.header}>
      <ul>
        <li><NavLink className={({isActive}) => isActive ? styles.active : ''} to="/">Start</NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? styles.active : ''} to="home">Home</NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? styles.active : ''} to="articles">Article</NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? styles.active : ''} to="about">About</NavLink></li>
      </ul>
    </header>
  )
}
export default Header
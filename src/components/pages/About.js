import { Link } from 'react-router-dom'
const About = () => {
  return (
    <section>
      <h1>About Page!</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque esse quae voluptate sapiente facere doloribus perspiciatis? Iste, voluptate vitae? Quasi commodi ipsa delectus. Quibusdam sit iste numquam! Consequatur, dignissimos perspiciatis.
      </p>
      <Link to='/contact'>Contact Us!</Link>
    </section>
  )
}
export default About
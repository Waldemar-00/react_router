
import { Link } from 'react-router-dom'
const Articles = () => {
  return (
    <section>
      <h1>Articles page!</h1>
      <ul>
        <li><Link to={'/article-details/a1'}>Article 1</Link></li>
        <li><Link to={'/article-details/a2'}>Article 2</Link></li>
        <li><Link to={'/article-details/a3'}>Article 3</Link></li>
      </ul>
    </section>
  )
}
export default Articles
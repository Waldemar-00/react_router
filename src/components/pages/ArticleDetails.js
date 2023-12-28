import { useParams } from 'react-router-dom'
import { data } from './data'
const ArticlesDetails = () => {
  const params = useParams()
  return (
    <article>
      <h1>Article Details</h1>
      <h3>{params.property}</h3>
      <p>
        {data[params.property]}
      </p>
    </article>
  )
}
export default ArticlesDetails
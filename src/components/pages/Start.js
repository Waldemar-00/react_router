import { Route, Link } from 'react-router-dom'
const Start = () => {
  return (
    <>
      <h1>Start Start Start  Page!</h1>
      <h2><Link to='/start/user'>Let's meet!</Link></h2>
      <Route path='/start/user'>
        <h2>Glad to see YOU!</h2>
        <form action="#">
          <label>
            Your name
            <input type="text" name='name'/>
          </label>
          <label>
            Your e-mail
            <input
              type="email"
              name='email'
              required
              pattern='.+@example\.com'
              placeholder="sophie@example.com" />
          </label>
        </form>
      </Route>
    </>
  )
}
export default Start
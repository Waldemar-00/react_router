const Form = () => {
  return (
    <>
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
    </>
  )
}
export default Form 
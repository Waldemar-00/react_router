import { useRef } from 'react' 

import Card from '../UI/Card' 
import Loader from '../UI/Loader' 
import styles from './JokeForm.module.css' 
// import { unstable_usePrompt } from 'react-router-dom'
// 
const JokeForm = (props) => {
  // const [isFocusedForm, setFocus] = useState(false)
  const typeInputRef = useRef() 
  const setupInputRef = useRef()
  const punchlineInputRef = useRef()

  function submitFormHandler(event) {
    event.preventDefault() 
    const type = typeInputRef.current.value 
    const setup = setupInputRef.current.value 
    const punchline = punchlineInputRef.current.value
    props.onAddJoke({ type, setup, punchline }) 
  }
  // function onFocusedHandler() {
    // setFocus(true)

  // }
  // function onSendDataHandler() {
    // setFocus(false)
  // }
  return (
    <>
      {/* <unstable_usePrompt */}
        {/* // when={isFocusedForm} */}
        {/* // message={ */}
          {/* // (location, action) => */}
            {/* // 'Do you want leave this page? If you left this page, you will lost all of your data in the form!' */}
        {/* // } */}
      {/* // />  */}
      <Card>
        <form
          className={styles.form}
          onSubmit={submitFormHandler}
          // onFocus={onFocusedHandler}
        >
          {props.isLoading && (
            <div className={styles.loading}>
              <Loader />
            </div>
          )}

          <div className={styles.control}>
            <label htmlFor='type'>Type</label>
            <input type='text' id='type' ref={typeInputRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor='setup'>Setup</label>
            <textarea id='setup' type='text' rows='5' ref={setupInputRef}></textarea>
          </div>
          <div className={styles.control}>
            <label htmlFor='punchline'>Punchline</label>
            <textarea id='punchline' type='text' rows='5' ref={punchlineInputRef}></textarea>
          </div>
          <div className={styles.actions}>
            <button
              className='btn'
              // onClick={onSendDataHandler}
            >Add Joke</button>
          </div>
        </form>
      </Card>
    </>
  ) 
} 

export default JokeForm 

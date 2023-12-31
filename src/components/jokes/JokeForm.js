import { useRef } from 'react' 

import Card from '../UI/Card' 
import Loader from '../UI/Loader' 
import styles from './JokeForm.module.css' 
import { v4 } from 'uuid'

const JokeForm = (props) => {
  const typeInputRef = useRef() 
  const setupInputRef = useRef()
  const punchlineInputRef = useRef()

  function submitFormHandler(event) {
    event.preventDefault() 
    const type = typeInputRef.current.value 
    const setup = setupInputRef.current.value 
    const punchline = punchlineInputRef.current.value
    const id = v4()
    props.onAddJoke({ id, type, setup, punchline }) 
  }

  return (
    <Card>
      <form className={styles.form} onSubmit={submitFormHandler}>
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
          <button className='btn'>Add Joke</button>
        </div>
      </form>
    </Card>
  ) 
} 

export default JokeForm 

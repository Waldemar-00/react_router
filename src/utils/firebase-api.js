const FIREBASE_ROOT_DOMAIN =
  'https://joke-fake-api-default-rtdb.firebaseio.com' 

export async function getJokes() {
  const response = await fetch(`${FIREBASE_ROOT_DOMAIN}/jokes.json`) 
  const data = await response.json() 
  if (!response.ok) {
    throw new Error(data.message || 'Jokes fetching error.') 
  }
  const convertedJokes = [] 
  for (const key in data) {
    const joke = {
      id: key,
      ...data[key],
    } 
    convertedJokes.push(joke) 
  }
  return convertedJokes 
}

export async function getJoke(id) {
  const response = await fetch(`${FIREBASE_ROOT_DOMAIN}/jokes/${id}.json`) 
  const data = await response.json() 
  if (!response.ok) {
    throw new Error('Joke fetching error.' || data.message ) 
  }
  const convertedJoke = {
    id: id,
    ...data,
  } 
  return convertedJoke 
}

export async function addJoke(jokeData) {
  const response = await fetch(`${FIREBASE_ROOT_DOMAIN}/jokes.json`, {
    method: 'POST',
    body: JSON.stringify(jokeData),
    headers: {
      'Content-Type': 'application/json',
    },
  }) 
  const data = await response.json() 
  if (!response.ok) {
    throw new Error(data.message || 'Joke adding error.') 
  }
}

export async function addComment(requestData) {
  const response = await fetch(
    `${FIREBASE_ROOT_DOMAIN}/comments/${requestData.id}.json`,
    {
      method: 'POST',
      body: JSON.stringify(requestData.comment),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  ) 
  const data = await response.json() 
  if (!response.ok) {
    throw new Error('Comment adding error.' || data.text ) 
  }
  return { comment: data.username } 
}

export async function getComments(id) {
  const response = await fetch(
    `${FIREBASE_ROOT_DOMAIN}/comments/${id}.json`
  ) 
  const data = await response.json() 
  if (!response.ok) {
    throw new Error(data.message || 'Comments fetching error.') 
  }
  const convertedComments = [] 
  for (const key in data) {
    const comment = {
      id: key,
      comment: data[key],
    } 
    convertedComments.push(comment) 
  }
  return convertedComments 
}

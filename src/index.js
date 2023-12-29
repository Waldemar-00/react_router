import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react' 
import { BrowserRouter } from 'react-router-dom'
import './index.css' 
// import App from './App' 
import AppJokes from './AppJokes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      <AppJokes />
    </BrowserRouter>
  </StrictMode>
) 

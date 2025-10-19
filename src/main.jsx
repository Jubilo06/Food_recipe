import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { RecipeProvider } from './component/RecipeProvider'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecipeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RecipeProvider>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { MainPage } from 'src/pages'
import { WithStore } from './withStore'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <WithStore>
      <MainPage />
    </WithStore>
  </React.StrictMode>
)

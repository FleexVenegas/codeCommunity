import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import Visitors from './routes/visitors/Visitors.tsx'
import './index.css'

export default function RootRoute() {
  return (
    <main>
        <BrowserRouter>
            <Visitors />
        </BrowserRouter>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RootRoute />
  </React.StrictMode>,
)

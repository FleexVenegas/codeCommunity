import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import { ContextProvider } from './context/ContextProvider.tsx'

// import { Provider } from 'react-redux'

// Components
import Visitors from './routes/visitors/Visitors.tsx'

// global styles"
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";

//Styles
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
    {/* <Provider store={store}>  */}
    <ContextProvider>
        <RootRoute />
    </ContextProvider>
    {/* </Provider> */}
  </React.StrictMode>,
)

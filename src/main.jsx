import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
// import State from "./context/State.jsx";
import { ContextProvider } from "./context/Context";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <State> */}
    <BrowserRouter>
     <ContextProvider>
    <App />
    </ContextProvider>
    </BrowserRouter>
    {/* </State> */}
  </StrictMode>
)
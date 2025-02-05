import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style.css"
import Hheader from './components/Header'
import Ffooter from './components/Footer'
import "./components/styles/Header.css"
import "./components/styles/Footer.css"
import "./components/styles/Aside.css"
import "./components/styles/Home.css"
import Rrouter from './components/Routes/Router'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router >
      <Hheader />
      <Rrouter />
      <Ffooter  />
    </Router>
  </StrictMode>,
)

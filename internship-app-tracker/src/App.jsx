import { useState } from 'react'

import Header from './components/Header.jsx'
import ApplicationsList from './components/ApplicationsList.jsx'
import NewApplication from './components/NewApplication.jsx'

import './App.css'

function App() {
  return (
    <>
    <Header/>
    <ApplicationsList/>
    <NewApplication/>
    </>
  )
}

export default App

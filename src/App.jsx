import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CCButtons from './ClassComps/CCButtons'
import CCForm from './ClassComps/CCForm'
import CCTable from './ClassComps/CCTable'

function App() {

  return (
    <>
    <h1>Q1</h1>
      <div className="card" >
        <CCButtons />
        </div>
        
      <h1>Q2</h1>
        <div className="card">
          <CCForm />
        </div>

        <h1>Q3</h1>
        <div className="card">
          <CCTable />
        </div>
        

    </>
  )
}

export default App

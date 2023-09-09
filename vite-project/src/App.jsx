import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// var todos =[ {
// titlle: "go to gym",
// description: "go to gym at 11",
// id: 1
// }, {
// title: "go eat food",
// description: "go eat food",
// id: 1
// },]

let todo = {
  title: "go to gym",
  description: "go to gym1",
  id: 1
}

function App() {
  

  return (
    <>
      <h5>Hi there</h5>
      {todo.title}
      {todo.description}
      {todo.id}
    </>
  )
}

export default App

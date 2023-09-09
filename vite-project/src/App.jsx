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

function App() {

  return (
    <div>
      <HelloWorldComponent></HelloWorldComponent>
      <HelloWorldComponent2></HelloWorldComponent2>
    </div>
  )

}

function HelloWorldComponent() {
  return <div>
    hello world
  </div>
}

function HelloWorldComponent() {
  return <div>
    hello world 2
  </div>
}

export default App

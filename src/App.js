import React from 'react'
import Main from './components/Main'
import Nav from './components/Nav'
export default function App() {
  return (
    <div className="container w-[550px] h-[530px] bg-[#282D35] mx-auto my-9 font-['Inter', 'sans-serif'] relative ">
      <Nav />
      <Main />
    </div>
  )
}


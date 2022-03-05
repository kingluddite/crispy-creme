import React from 'react'
import Navbar from './Navbar'


function Header(props) {
  console.log(props)
  return (
    <header>
      <Navbar />
      <h1>{props.companyName}</h1>
      <h2>{props.typeOfStore}</h2>
      <h3>List of US States</h3>
      <ul>
        {props.usStatesProp.map((s, index) => <li key={index}>{s.name} - {s.abbreviation}</li>)}
      </ul>
    </header>
  )
}

export default Header
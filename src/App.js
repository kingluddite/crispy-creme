import React, { Component } from 'react'
import './App.css'
import { US_STATES } from'./data/us-states'
import Header from './components/Header'
import Footer from './components/Footer'

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
       usStates: US_STATES
    }
  }
  render() {
      return (
    <>
      <Header companyName="Crispy Creme" typeOfStore="donuts" usStatesProp={this.state.usStates} />
      <div>hello from react</div>
      <Footer year="2022" />
    </>
  )
  }
}

export default App

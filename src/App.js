import React, { Component } from 'react'
import images from './images1.jpg'
import './App.css'
import {axios, axiosPublic} from './configs/axios'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurants: []
    }
  }

  getRestaurant = async () => {
    try {
      const res = await axiosPublic.get(`/restaurants`)
      const restaurants = res.data
      this.setState({ restaurants })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div>
        <header className="App-header">
        <img src={ images } className="App-logo" alt="logo" />
        <p>
          Bita xin chào các bạn ahihi :v
        </p>
        <a className="App-link" href="http://localhost:1337/restaurants" target="_blank" rel="noopener noreferrer">Link API</a>
        <br></br>
        <button onClick={this.getRestaurant}>Hiển thị API</button>
        <ul>
          {
            this.state.restaurants.map(restaurants => {
            return <p key={restaurants.id}>ID: {restaurants.id} <br></br> Name: {restaurants.name} <br></br> Description: {restaurants.description}</p>
            })
          }
        </ul>
      </header>
      </div>
    )
  }
}

export default App;

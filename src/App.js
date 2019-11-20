import React, { Component } from 'react'
import images from './images1.jpg'
import './App.css'
import { axiosPublic } from './configs/axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';

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
        
        <Login/>

      </div>
    )
  }
}

export default App;

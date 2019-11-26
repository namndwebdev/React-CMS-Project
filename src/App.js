import React, { Component } from 'react'
import images from './images1.jpg'
import './App.css'
import { axiosPublic } from './configs/axios'
import Header from './pages/home/Header'
import Footer from './pages/home/Footer';
import Body from './pages/home/Body'
import Register from './component/Register'

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
      <div id="page-top" data-spy="scroll" data-target=".navbar">
        <div id="main-wrapper">
          <div id="preloader">
            <div id="status">
              <div className="status-mes"></div>
            </div>
          </div>
          <div className="uc-mobile-menu-pusher">
            <div className="content-wrapper">
              <Header />
               <Body/>
               
              <Footer/>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;

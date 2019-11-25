import React, { Component } from 'react'
import { axiosPublic } from "../configs/axios";
import '../App.css'

export default class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: []
    }
  }

  componentDidMount = async () => {
    try {
      let res = await axiosPublic.get(`api/user/5dd78434717194197c8bb37b`)
      let user = []
      user.push(res.data)
      this.setState({ user })
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    return (
      <div>
        <h2 className="center-align">Profile</h2>
        {
          this.state.user.map(user => {
          return <div className="center-align"><p>Username: { user.username }</p>
            <p>Email: { user.email }</p>
            <button className="waves-effect waves-red btn-small">Edit</button>
          </div>
          })
        }
      </div>
    )
  }
}

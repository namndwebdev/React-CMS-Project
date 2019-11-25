import React, { Component } from 'react'
import { axiosPublic } from '../configs/axios'
import { BrowserRouter as Router } from "react-router-dom";
import Comment from './Comment'

export default class ViewPost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post: {}
    }
  }

  componentDidMount = async () => {
    try {
      let { match: { params } } = this.props
      let res = await axiosPublic.get(`api/post/${params.id}`)
      let post = res.data
      this.setState({ post })
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    return (
      <Router>
        <div className="section container center-align">
          <h5>{ this.state.post.title }</h5>
          <p>{ this.state.post.createdAt }</p>
          <p>{ this.state.post.content }</p>
        </div>
        <hr></hr>
        <Comment pid={ this.state.post._id }/>
      </Router>
    )
  }
}

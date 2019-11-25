import React, { Component } from 'react'
import { axiosPublic } from '../configs/axios'
import { Link } from "react-router-dom";

export default class ListPosts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      _id: ''
    }
  }

  componentDidMount = async () => {
    try {
      let res = await axiosPublic.get(`api/post`)
      let posts = res.data
      this.setState({ posts })
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    return (
        <div>
          {
            this.state.posts.map(post => {
              return <div className="container">
                <div className="col s3">
                  <div className="card light darken-1">
                    <div className="card-content darken-4-text">
                      <span className="card-title">{ post.topic }</span>
                      <hr></hr>
                      <h6>{ post.title }</h6>
                      <hr></hr>
                      <p>{ post.content }</p>
                    </div>
                    <div className="card-action">
                      <Link to={`/post/${post._id}`}>View</Link>
                      <Link to="#">Report</Link>
                    </div>
                  </div>
                </div>
              </div>
            })
          }
        </div>
    );
  }
}

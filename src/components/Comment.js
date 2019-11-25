import React, { Component } from 'react'
import { axiosPublic } from '../configs/axios'

export default class Comment extends Component {
  constructor(props) {
    super(props)
    props = {
      
    }
    this.state = {
      post: [],
      comments: []
    }
  }

  componentDidUpdate = async () => {
    try {
      if(this.props.pid) {
        let res = await axiosPublic.get(`/api/post/${this.props.pid}/comment`)
        let post = res.data
        this.setState({ comments: post.comments})
      }
    } catch (error) {
      console.error(error)
      return null;
    }
  }


  render() {
    return (

      <div>
        <div className="row container">
          {
            this.state.comments.map(item => {
              return <div>
                {/* <p>{ item.user.username }</p> */}
                <p>{ item.content }</p>
              </div>
            })
          }
        </div>
        <div className="row container">
          <div className="input-field col s12">
            <input className="col s11" id="comment" type="text"></input>
            <label htmlFor="comment">Comments</label>
            <button className="waves-effect waves-red btn-small col s1">Send</button>
          </div>
        </div>
      </div>
    )
  }
}

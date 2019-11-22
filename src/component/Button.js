import React, { Component } from 'react'
import './Button.css'

export default class Button extends Component {
 constructor(props) {
   super(props);
   this.state ={
      }
      this.setState=({
        title:'Logout'
      })
 }
 static getDerivedStateFromProps(props, state) {
   
   return {title: props.title}
  }
  
  shouldComponentUpdate() {
    return true
  }
componentDidMount() {
  console.log('componentDidMount');
  
}


  render() {
    return (
      <button >{this.state.title}</button>
    )
  }
}

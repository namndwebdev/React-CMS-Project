import React, { Component } from "react";
import { axiosPublic } from "../configs/axios";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: ""
    };
  }

  register = () => {
    axiosPublic
      .post("/api/user/", {
        username: this.state.username,
        password: this.state.password,
        email: this.state.email
      })
      .then(res => {
        alert(`Sign Up Successfully! Login Now!`);
        window.location.href = "/login";
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="row container">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input
                value={this.state.username}
                name="username"
                id="username"
                type="text"
                className="validate"
                onChange={event => {
                  this.setState({ username: event.target.value });
                }}
              ></input>
              <label htmlFor="username">Username</label>
              <span
                class="helper-text"
                data-error="Username most not be empty"
              ></span>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                value={this.state.password}
                name="password"
                id="password"
                type="password"
                className="validate"
                onChange={event => {
                  this.setState({ password: event.target.value });
                }}
              ></input>
              <label htmlFor="password">Password</label>
              <span
                class="helper-text"
                data-error="Password most not be empty"
              ></span>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                value={this.state.email}
                name="email"
                id="email"
                type="email"
                className="validate"
                onChange={event => {
                  this.setState({ email: event.target.value });
                }}
              ></input>
              <label htmlFor="email">Email</label>
              <span
                class="helper-text"
                data-error="Email most not be empty"
              ></span>
            </div>
          </div>
          <button
            type="button"
            className="waves-effect waves-red btn-large"
            onClick={this.register}
          >
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

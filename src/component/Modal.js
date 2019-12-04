import React, {Component} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import { axiosPublic } from '../configs/axios'
export class Modal extends Component {
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
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div>
          <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h4 text-center mb-4">Sign up</p>
            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              Your username
            </label>
            <input
               value={this.state.username}
               name="username"
               id="defaultFormRegisterNameEx"
               type="text"
               className="form-control"
               onChange={event => {
                 this.setState({ username: event.target.value });
               }}
            />
            <br />
            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
              Your email
            </label>
            <input
             value={this.state.email}
             name="email"
             id="defaultFormRegisterEmailEx"
              className="form-control"
             type="email"
             onChange={event => {
               this.setState({ email: event.target.value });
             }}
            />
            <br />
            <label
              htmlFor="defaultFormRegisterConfirmEx"
              className="grey-text"
            >
              Your password
            </label>
           
          
            <input
              value={this.state.password}
              name="password"
              id="defaultFormRegisterPasswordEx"
              type="password"
              className="form-control"
              onChange={event => {
                this.setState({ password: event.target.value });
              }}
            />
            <div className="text-center mt-4">
            <br />
            
              <MDBBtn color="unique" type="button" onClick={this.register}>
                Register
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
      </div>
    );
  }
}


export default Modal;


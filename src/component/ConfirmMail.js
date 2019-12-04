import React, { Component } from 'react'

export default class ConfirmMail extends Component {
  render() {
    return (
      <div>
      <MDBContainer>
  <MDBRow>
    <MDBCol md="6">
      <form>
        <p className="h4 text-center mb-4">Sign up</p>
        <h4>Register is successful</h4>
        <p>Please check your email and verify your account</p>
        <br />
          <MDBBtn color="unique" type="button" onClick={this.register}>
            Register
          </MDBBtn>
      
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
  </div>
    )
  }
}

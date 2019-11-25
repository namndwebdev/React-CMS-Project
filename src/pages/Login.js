import React, { Component } from "react";
import { connect } from "react-redux";

class LoginPage extends Component {
  render() {
    return (
      <div className="row container">
        <form className="col s12">
        <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" className="validate"></input>
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="password" type="password" className="validate"></input>
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <button className="waves-effect waves-red btn-large">Login</button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = rootReducerState => {
  return {
    money: rootReducerState.data.money
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setToken: function(giatri) {
      dispatch({
        type: "SET_TOKEN",
        money: giatri
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

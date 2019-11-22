import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import { axiosPublic } from '../configs/axios'


class LoginPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		}

	}

	onGetValue = event => {
		const target = event.target
		const name = target.name
		const value = target.value
		this.setState({
			[name]: value
		})
	}

	onLogin = event => {
		event.preventDefault()
		const { email, password } = this.state
		//  const name = this.state.email
		//  const pass = this.state.email
		this.props.onLogin({
			email,
			password
		})
	}


	render() {
		const { email, password } = this.state

		return (
			<div>
				<form onSubmit={this.onLogin}>
					<input
						type="text"
						name="email"
						value={email}
						placeholder="Enter email"
						onChange={this.onGetValue}

					/>
					<input
						type="text"
						name="password"
						placeholder="Enter password"
						value={password}
						onChange={this.onGetValue}

					/>

					<button
						type='submit'
						onSubmit={this.onLogin}
					>
						Login
					</button>

				</form>

			</div>
		);
	}
}

let setCookie = (cname, cvalue, exdays) => {
	console.log(cvalue)
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

const mapStateToProps = rootReducerState => {
	return {
		
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		onLogin: (data) => {
			axiosPublic({
				method :'POST',
				url: "/api/login",
				data : {
					email: data.email,
					password: data.password
				}
			})
			.then(data => {
				if (data.data.token) {

					// window.location.href = "http://localhost:3000";
					setCookie("token", data.data.token, 1)
					
					dispatch({
						type: "LOGIN",
						data: data.data.token
					});

				}

			})
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginPage)


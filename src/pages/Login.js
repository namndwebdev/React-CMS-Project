import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux'

class LoginPage extends Component {



    render() {

        return (
            <div>
                <Button onClick={() => {
                    alert('aa')
                    this.props.setToken('abc')
                }}>Change</Button>

            <p>{this.props.token}</p>
            </div>
        );
    }
}
const mapStateToProps = rootReducerState=>{
    return {
        token: rootReducerState.token
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setToken: function (giatri) {
            dispatch({
                type: 'SET_TOKEN',
                newToken: giatri
            })
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPage)


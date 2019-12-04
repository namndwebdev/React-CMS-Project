import React, { Component } from 'react'
import Login from '../Login'
import Register from '../../component/Register'
import CKEditor from '../../component/CKEditor'
export default class Header extends Component {
    render() {
        return (
            <div>

                <section id="header_section_wrapper" className="header_section_wrapper">
                    <div className="container">
                        <div className="header-section">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="left_section">
                                        <span className="date">
                                            {day},
                                            </span>
                                        <span className="time">
                                            {month}
                                            </span>
                                        <div className="social">
                                            <a href="/#" className="icons-sm fb-ic"><i className="fa fa-facebook"></i></a>
                                            <a href="/#" className="icons-sm tw-ic"><i className="fa fa-twitter"></i></a>
                                            <a href="/#" className="icons-sm inst-ic"><i className="fa fa-instagram"> </i></a>
                                            <a href="/#" className="icons-sm tmb-ic"><i className="fa fa-tumblr"> </i></a>
                                            <a href="/#" className="icons-sm rss-ic"><i className="fa fa-rss"> </i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="logo">
                                        <a href="/#" ><img src="assets/img/logo.png" alt="Tech NewsLogo" /></a>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="right_section">
                                        <ul className="nav navbar-nav">
                                            <Login />
                                            <li><a href="/#" ><Register /> </a></li>
                                            <li className="dropdown lang">
                                                <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1"
                                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">En <i
                                                        className="fa fa-angle-down"></i></button>
                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                                    <li><a href="/#" >Bn</a></li>
                                                </ul>
                                            </li>
                                        </ul>

                                        <ul className="nav-cta hidden-xs">
                                            <li className="dropdown"><a href="/#" data-toggle="dropdown" className="dropdown-toggle"><i
                                                className="fa fa-search"></i></a>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <div className="head-search">
                                                            <form >
                                                                <div className="input-group">
                                                                    <input type="text" className="form-control"
                                                                        placeholder="Type Something" />
                                                                    <span className="input-group-btn">
                                                                        <button type="submit"
                                                                            className="btn btn-primary">Search
                                                                        </button>
                                                                    </span>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="navigation-section">
                            <nav className="navbar m-menu navbar-default">
                                <div className="container">
                                    <div className="navbar-header">
                                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                            data-target="#navbar-collapse-1"><span className="sr-only">Toggle navigation</span> <span
                                                className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span>
                                        </button>
                                    </div>
                                    <div className="collapse navbar-collapse" id="#navbar-collapse-1">
                                        <ul className="nav navbar-nav main-nav">
                                            <li className="active"><a href="/#">News</a></li>
                                            <li><a href="/#">Mobile</a></li>
                                            <li><a href="/#">Tablet</a></li>
                                            <li><a href="/#">Gadgets</a></li>
                                            <li><a href="/#">Camera</a></li>
                                            <li className=""><a  href="/#collapseExample" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseExample">+ News
                                                 <span><i className="fa fa-angle-down"></i></span></a>
                                            </li>
                                            <br />
                                            <div className="collapse" id="collapseExample">
                                                <div className="card card-body">
                                                    <CKEditor />
                                                </div>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>

                    </div>

                </section>
            </div>
        )
    }
}



var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var months = ['Jan','Feb','Mar','April','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
var now = new Date();
var day = days[ now.getDay() ];
var month = months[ now.getMonth() ] +','+ now.getDate()+'-'+ now.getFullYear();
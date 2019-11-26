import React, { Component } from 'react'
import './Header.css'
import Login from '../Login'
// import Register from '../../component/Register'
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
                                            Sunday .
                                            </span>
                                        <span className="time">
                                            09 August . 2016
                                            </span>
                                        <div className="social">
                                            <a className="icons-sm fb-ic"><i className="fa fa-facebook"></i></a>
                                            <a className="icons-sm tw-ic"><i className="fa fa-twitter"></i></a>
                                            <a className="icons-sm inst-ic"><i className="fa fa-instagram"> </i></a>
                                            <a className="icons-sm tmb-ic"><i className="fa fa-tumblr"> </i></a>
                                            <a className="icons-sm rss-ic"><i className="fa fa-rss"> </i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="logo">
                                        <a href="index.html"><img src="assets/img/logo.png" alt="Tech NewsLogo" /></a>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="right_section">
                                        <ul className="nav navbar-nav">
                                            <Login/>
                                            <li><a href="#">Register</a></li>
                                            <li className="dropdown lang">
                                                <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1"
                                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">En <i
                                                        className="fa fa-angle-down"></i></button>
                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                                    <li><a href="#">Bn</a></li>
                                                </ul>
                                            </li>
                                        </ul>

                                        <ul className="nav-cta hidden-xs">
                                            <li className="dropdown"><a href="#" data-toggle="dropdown" className="dropdown-toggle"><i
                                                className="fa fa-search"></i></a>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <div className="head-search">
                                                            <form role="form">
                                                                <div className="input-group">
                                                                    <input type="text" className="form-control"
                                                                        placeholder="Type Something" /> <span className="input-group-btn">
                                                                        <button type="submit"
                                                                            className="btn btn-primary">Search
                                                                            </button>
                                                                    </span></div>
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
                                            <li className="active"><a href="index.html">News</a></li>
                                            <li><a href="category.html">Mobile</a></li>
                                            <li><a href="blog.html">Tablet</a></li>
                                            <li><a href="blog.html">Gadgets</a></li>
                                            <li><a href="blog.html">Camera</a></li>
                                            <li><a href="blog.html">Design</a></li>
                                            <li className="dropdown m-menu-fw"><a href="#" data-toggle="dropdown" className="dropdown-toggle"> + News
                                <span><i className="fa fa-angle-down"></i></span></a>
                                                <ul className="dropdown-menu">
                                                    <CKEditor/>
                                                </ul>
                                            </li>
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

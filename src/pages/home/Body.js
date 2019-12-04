import React, { Component } from 'react'
import { axios } from '../../configs/axios'
import { connect } from 'react-redux'
import OldPost from '../../component/OldPost';
class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                title: "",
                content: "",
            }]
        }
    }

    componentDidMount() {
        axios.get("/api/post")
            .then((res) => {
                let data = res.data.data

                this.setState({
                    data: data
                }, () => {
                    console.log(this.state.data)
                })
            }
            )
            .catch((err) => { 'loi' })
    }



    render() {
        return (
            <div>
                <section id="feature_news_section" className="feature_news_section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="feature_article_wrapper">
                                    <div className="feature_article_img">
                                        <img className="img-responsive top_static_article_img" src="assets/img/feature-top.jpg"
                                            alt="feature-top" />
                                    </div>


                                    <div className="feature_article_inner">
                                        <div className="tag_lg red"><a href="/#" >Hot News</a></div>
                                        <div className="feature_article_title">
                                            <h1><a href="/#" target="_self">{this.props.data.title} {this.state.data[0].title}</a></h1>
                                        </div>

                                        <div className="feature_article_date"><p dangerouslySetInnerHTML={{ __html: this.props.data.content }}></p>
                                            <a href="/#" target="_self">{this.props.data.user},</a>
                                            <a href="/#"
                                                target="_self">{this.props.data.date}</a>
                                        </div>

                                        <div className="feature_article_content">

                                        </div>

                                        <div className="article_social">
                                            <span><i className="fa fa-share-alt"></i><a href="/#" >424</a>Shares</span>
                                            <span><i className="fa fa-comments-o"></i><a href="/#" >4</a>Comments</span>
                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div className="col-md-5">
                                <div className="feature_static_wrapper">
                                    <div className="feature_article_img">
                                        <img className="img-responsive" src="assets/img/feature-static1.jpg" alt="feature-top" />
                                    </div>

                                    <div className="feature_article_inner">
                                        <div className="tag_lg purple"><a href="/#" >Top Viewed</a></div>
                                        <div className="feature_article_title">
                                            <h1><a href="/#" target="_self">{this.state.data[1] && this.state.data[1].title}</a></h1>
                                        </div>

                                        <div className="feature_article_date"><a href="/#" target="_self">{this.props.data.user}</a>,<a href="/#"
                                            target="_self">Aug4, 2015</a>
                                        </div>

                                        <div className="feature_article_content">
                                            {this.state.data[1] && this.state.data[1].content}
                                        </div>

                                        <div className="article_social">
                                            <span><i className="fa fa-share-alt"></i><a href="/#" >424</a>Shares</span>
                                            <span><i className="fa fa-comments-o"></i><a href="/#" >4</a>Comments</span>
                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div className="col-md-5">
                                <div className="feature_static_last_wrapper">
                                    <div className="feature_article_img">
                                        <img className="img-responsive" src="assets/img/feature-static2.jpg" alt="feature-top" />
                                    </div>

                                    <div className="feature_article_inner">
                                        <div className="tag_lg blue"><a href="/#">Top Viewed</a></div>

                                        <div className="feature_article_title">
                                            <h1><a href="/#" target="_self">{this.state.data[2] && this.state.data[2].title}</a></h1>
                                        </div>
                                        <div className="feature_article_date"><a href="/#" target="_self">{this.props.data.user}</a>,<a href="/#"
                                            target="_self">Aug 4, 2015</a></div>
                                        <div className="feature_article_content">
                                            {this.state.data[2] && this.state.data[2].content}
                                        </div>
                                        <div className="article_social">
                                            <span><i className="fa fa-share-alt"></i><a href="/#" >424</a>Shares</span>
                                            <span><i className="fa fa-comments-o"></i><a href="/#" >4</a>Comments</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <OldPost />
                    </div>
                </section>
            </div>
        )
    }
}


const mapStateToProps = rootReducerState => {
    return {
        data: rootReducerState.postReducer
    }
}

export default connect(
    mapStateToProps,
    null
)(Body)
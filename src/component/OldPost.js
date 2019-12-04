import React, { Component } from 'react';
import './OldPost.css'
class OldPost extends Component {

  render() {
    return (
      <div>
        <div className="entity_wrapper">
          <div className="entity_title">
            <h1><a href="single.html" target="_self">Airbnb launches photo-centric app for iPads and Android tablets.</a>
            </h1>
          </div>
          {/* entity_title */}
          <div className="entity_meta">
            <a href="/#">10Aug- 2015</a>, by: <a href="/#">Eric joan</a>
          </div>
          {/* entity_meta */}
          <div className="rating">
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star-half-full" />
          </div>
          {/* rating */}
          <div className="entity_social">
            <a href="/#" className="icons-sm sh-ic"><i className="fa fa-share-alt" /><b>424</b>
              <span className="share_ic">Shares</span>
            </a>
            <a href="/#" className="icons-sm fb-ic"><i className="fa fa-facebook" /></a>
            {/*Twitter*/}
            <a href="/#" className="icons-sm tw-ic"><i className="fa fa-twitter" /></a>
            {/*Google +*/}
            <a href="/#" className="icons-sm inst-ic"><i className="fa fa-google-plus"> </i></a>
            {/*Linkedin*/}
            <a href="/#" className="icons-sm tmb-ic"><i className="fa fa-ge"> </i></a>
            {/*Pinterest*/}
            <a href="/#" className="icons-sm rss-ic"><i className="fa fa-rss"> </i></a>
            <span className="arrow">»</span>
          </div>
          {/* entity_social */}
          <div className="entity_content">
            <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I
              will give you a complete account of the system, and expound the actual teachings of the great explorer of
              the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself,
              because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter
      consequences that are extremely painful. </p>
          </div>
          {/* entity_content */}
        </div>
        {/* entity_wrapper */}
      </div>
    );
  }
}

export default OldPost;


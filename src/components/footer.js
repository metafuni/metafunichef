import React, { Component } from "react";

export default class footer extends Component {
  render() {
    return (
      <div className="site-footer" id="footer">
        <div className="container">
          <span style={{textTransform: 'uppercase'}}>{this.props.siteName} <span style={{textTransform: 'lowercase', fontSize: '.75rem', marginLeft: '.5rem'}}>
© Copyright 2021, all rights are reserved</span></span>
        </div>
      </div>
    );
  }
}

import React from 'react';

require('assets/styles/message.scss');

export default React.createClass({
  getDefaultProps: function () {
    return {
      creatorColor: '#999999',
      contentColor: '#666666',
      username: 'Anonymous',
      contentFont: 'sans-serif'
    }
  },
  render: function () {
    let creatorStyle = {
      color: this.props.creatorColor
    };
    let contentStyle = {
      color: this.props.contentColor,
      fontFamily: this.props.contentFont
    }
    return (
      <p className="messageWrap">
        <span style={creatorStyle} className="from">{this.props.username}</span>
        <span style={contentStyle} className="message">{this.props.content}</span>
      </p>
    )
  }
})

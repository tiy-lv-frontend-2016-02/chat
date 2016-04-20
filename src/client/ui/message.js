import React from 'react';

require('assets/styles/message.scss');

export default React.createClass({
  getDefaultProps: function () {
    return {
      creatorColor: '#cccccc',
      contentColor: '#666666',
      creator: 'Anonymous'
    }
  },
  render: function () {
    let creatorStyle = {
      color: this.props.creatorColor
    };
    let contentStyle = {
      color: this.props.contentColor
    }
    return (
      <p>
        <span style={creatorStyle} className="from">{this.props.creator}</span>
        <span style={contentStyle} className="message">{this.props.content}</span>
      </p>
    )
  }
})

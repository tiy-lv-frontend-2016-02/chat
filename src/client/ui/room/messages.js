import React from 'react';
import Message from 'ui/room/message';

export default React.createClass({
  componentWillUpdate: function () {
    var node = this.refs.messages;
    this.shouldScrollBottom = node.scrollTop + node.offsetHeight === node.scrollHeight;
  },
  componentDidUpdate: function () {
    if (this.shouldScrollBottom) {
      var node = this.refs.messages;
      node.scrollTop = node.scrollHeight
    }
  },
  render: function () {
    return (
      <div ref="messages" id="messages">
        {this.props.messages.map((message,i) => <Message key={i} {...message} />)}
      </div>
    )
  }
})

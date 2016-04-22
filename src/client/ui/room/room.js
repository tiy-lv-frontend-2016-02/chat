import React from 'react';
import MessageForm from 'ui/room/messageForm';
import Messages from 'ui/room/messages';

require('assets/styles/chatroom.scss');

export default React.createClass({

  render: function() {
    return (
      <div id="chatroom">
        <Messages messages={this.props.messages} />
        <MessageForm />
      </div>
    )
  }
})

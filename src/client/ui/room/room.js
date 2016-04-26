import React from 'react';
import MessageForm from 'ui/room/messageForm';
import Messages from 'ui/room/messages';
import UserList from 'ui/room/user-list';

require('assets/styles/chatroom.scss');

export default React.createClass({

  render: function() {
    return (
      <div id="chatroom">
        <div id="messagesContainer">
          <Messages messages={this.props.messages} />
          <MessageForm />
        </div>
        <div id="userListContainer">
          <UserList users={this.props.users} />
        </div>
      </div>
    )
  }
})

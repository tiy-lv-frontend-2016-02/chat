import React from 'react';
import store from 'store';
import { privateMessage } from 'actions/actions';

export default React.createClass({
  getDefaultProps: function() {
    return {
      users: []
    }
  },
  sendPrivateMessage: function (e) {
    let username = store.getState().userReducer.username;
    let message = 'Hello';
    let to = e.target.innerHTML;
    privateMessage(to, message, username);
  },
  render: function () {
    return (
      <ul>
        {this.props.users.map(function(user, i){
          return <li onClick={this.sendPrivateMessage} key={i}>{user}</li>
        }.bind(this))}
      </ul>
    )
  }
});

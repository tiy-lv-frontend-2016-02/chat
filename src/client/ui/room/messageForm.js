import React from 'react';
import MessagePrefs from 'ui/room/messagePrefs';
import { addMessage } from 'actions/actions';

export default React.createClass({
  getInitialState: function () {
    return {
      val: ''
    }
  },
  _handleSubmit: function (e) {
    e.preventDefault();

    if (this.state.val !== '') {
      addMessage({content: this.state.val});
      this.setState({val:''});
    }

    this.refs.messageInput.focus();
  },
  _handleChange: function (e) {
    this.setState({val: e.target.value});
  },
  render: function () {
    return (
      <div id="messageForm">
        <MessagePrefs />
        <form onSubmit={this._handleSubmit}>
          <input autoComplete="off" onChange={this._handleChange} ref="messageInput" value={this.state.val} id="messageInput" type="text" />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
})

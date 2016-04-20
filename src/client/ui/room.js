import React from 'react';
import io from 'socket.io-client';
import store from 'store';
import { addMessage } from 'actions/actions';
import Message from 'ui/message';

const socket = io();

require('assets/styles/chatroom.scss');

export default React.createClass({
  getInitialState: function () {
    return {
      messages: [],
      val: ''
    }
  },
  _handleChange: function (e) {
    this.setState({
      val: e.target.value
    });
  },
  _handleSubmit: function (e) {
    e.preventDefault();

    if (this.state.val !== '') {
      addMessage({content: this.state.val});
      this.setState({
        val: ''
      });
    }

    this.refs.messageInput.focus();
  },
  componentWillMount: function () {
    this.unsubscribe = store.subscribe(function(){
      let currentStore = store.getState();
      this.setState({
        val: '',
        messages: currentStore.messageReducer.messages
      })
    }.bind(this));
  },
  componentWillUnmount: function () {
    this.unsubscribe();
  },
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
  render: function() {
    return (
      <div id="chatroom">
        <div ref="messages" id="messages">
          {this.state.messages.map((message,i) => <Message key={i} {...message} />)}
        </div>
        <div id="messageForm">
          <form onSubmit={this._handleSubmit}>
            <input ref="messageInput" type="text" onChange={this._handleChange} value={this.state.val} />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    )
  }
})

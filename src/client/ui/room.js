import React from 'react';
import { addMessage, chooseColor, chooseFont } from 'actions/actions';
import Message from 'ui/message';

require('assets/styles/chatroom.scss');

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
  _chooseColor: function (e) {
    chooseColor(e.target.value);
  },
  _chooseFont: function (e) {
    chooseFont(e.target.value);
  },
  _handleChange: function (e) {
    this.setState({val: e.target.value});
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
          {this.props.messages.map((message,i) => <Message key={i} {...message} />)}
        </div>
        <div id="messageForm">
          <div id="messagePrefs">
            <label htmlFor="contentColorPref">Choose a color</label>
            <input onChange={this._chooseColor} type="color" id="contentColorPref" />
            <label htmlFor="contentFontPref">Choose a font</label>
            <select onChange={this._chooseFont} id="contentFontPref">
              <option value="sans-serif">Default</option>
              <option style={{fontFamily:'monospace'}} value="monospace">Monospace</option>
            </select>
          </div>
          <form onSubmit={this._handleSubmit}>
            <input onChange={this._handleChange} ref="messageInput" value={this.state.val} id="messageInput" type="text" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    )
  }
})

import React from 'react';
import Room from 'ui/room/room';
import DOM from 'react-dom';
import store from 'store';

export default React.createClass({
  getInitialState: function () {
    return {
      messages: []
    }
  },
  componentWillMount: function () {
    this.unsubscribe = store.subscribe(function(){
      let currentStore = store.getState();
      this.setState({
        messages: currentStore.messageReducer.messages
      })
    }.bind(this));
  },
  componentWillUnmount: function () {
    this.unsubscribe();
  },
  render: function () {
    return (
      <Room name="default" messages={this.state.messages} />
    )
  }
})

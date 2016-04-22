import React from 'react';
import store from 'store';

import RoomContainer from 'ui/room/room-container';
import Login from 'ui/login';

export default React.createClass({
  getInitialState: function () {
    return {
      isLoggedIn: false
    }
  },
  componentWillMount: function () {
    this.unsubscribe = store.subscribe(function(){
      let currentStore = store.getState();

      if (currentStore.userReducer.username) {
        this.setState({
          isLoggedIn: true
        })
      } else {
        this.setState({
          isLoggedIn: false
        })
      }
    }.bind(this));
  },
  componentWillUnmount: function () {
    this.unsubscribe();
  },
  render: function () {
    return (
      this.state.isLoggedIn ? <RoomContainer /> : <Login />
    )
  }
});

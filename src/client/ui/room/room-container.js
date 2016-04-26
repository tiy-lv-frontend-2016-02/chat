import React from 'react';
import Room from 'ui/room/room';
import DOM from 'react-dom';
import { connect } from 'react-redux';

const RoomContainer = React.createClass({
  render: function () {
    return (
      <Room {...this.props} />
    )
  }
})

const stateToProps = function (state) {
  return {
    messages: state.messageReducer.messages,
    users: state.userReducer.users,
  }
}

export default connect(stateToProps)(RoomContainer)

import React from 'react';
import store from 'store';
import { login } from 'actions/actions';

export default React.createClass({
  getInitialState: function () {
    return {
      val: ''
    }
  },
  _handleChange: function (e) {
    this.setState({
      val: e.target.value
    })
  },
  componentWillMount: function () {
    login(window.localStorage.getItem('username'));
  },
  _handleSubmit: function (e) {
    e.preventDefault();

    if (this.state.value !== '') {
      window.localStorage.setItem('username', this.state.val);
      login(this.state.val);
    }
  },
  render: function () {
    return (
      <div id="login">
        <form onSubmit={this._handleSubmit}>
          <label htmlFor="username">Username</label>
          <input onChange={this._handleChange} value={this.state.val} id="username" type="text" placeholder="Username" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
});

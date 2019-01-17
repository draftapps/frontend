import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { login } from './actions';

/* eslint-disable react/prefer-stateless-function */
class LoginPage extends React.PureComponent {
  static propTypes = {
    login: PropTypes.func.isRequired,
  };

  state = {
    username: '',
    password: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.login(this.state);
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { username, password } = this.state;

    return (
      <form className="login-form" onSubmit={this.handleSubmit}>
        <div className="login-form__field">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            value={username}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="login-form__field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={this.handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  username: state.username,
  password: state.password,
});

export default connect(
  mapStateToProps,
  { login },
)(LoginPage);

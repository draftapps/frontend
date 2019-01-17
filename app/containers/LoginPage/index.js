import React from 'react';
import LoginForm from 'components/LoginForm';

/* eslint-disable react/prefer-stateless-function */
export default class LoginPage extends React.PureComponent {
  state = {
    username: '',
    password: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log('Submitted: ', this.state);
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { username, password } = this.state;
    return (
      <LoginForm
        username={username}
        password={password}
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
      />
    );
  }
}

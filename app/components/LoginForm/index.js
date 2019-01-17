import React from 'react';
import PropTypes from 'prop-types';

const LoginForm = props => {
  console.log({ props });
  return (
    <form onSubmit={props.onSubmit}>
      <div className="field">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          value={props.username}
          onChange={props.onChange}
          required
        />
      </div>
      <div className="field">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={props.password}
          onChange={props.onChange}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

LoginForm.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default LoginForm;

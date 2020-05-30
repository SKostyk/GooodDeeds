import React from 'react';
import PropTypes from 'prop-types';

class SignIn extends React.Component {
  state = {
    Email: '',
    password: '',
    errors: {
      username: '',
      password: ''
    }
  };

  handle_change = event => {
    event.preventDefault();
  const { name, value } = event.target;
  let errors = this.state.errors;
  

  
  this.setState({errors, [name]: value});
  };

  render() {
    const {errors} = this.state;
    return (
      <form onSubmit={(e) => this.props.handle_login(e, this.state)}>
        <div className="inpSec">
          <div className="labelInp">
            <label htmlFor="Email">Email</label>
            <input
              placeholder="Enter Email"
            type="Email"
            required="required"
            autoComplete="off"
            name="Email"
            value={this.state.Email}
            onChange={this.handle_change}
            />
          </div>
        </div>

        <div className="inpSec">
          <div className="labelInp">
            <label htmlFor="password">Password</label>
            <input
              placeholder="Enter Password"
              type="password"
              required="required"
              name="password"
              value={this.state.password}
              onChange={this.handle_change}
              noValidate
            />
          </div>
        </div>
        <input type="submit" className="submit" value="Sign In" />
      </form>
    );
  }
}

export default SignIn;

SignIn.propTypes = {
  handle_login: PropTypes.func.isRequired
};
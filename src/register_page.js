import React from 'react';
import PropTypes from 'prop-types';



class Signup extends React.Component {
  state = {
    Email: '',
    first_name: '',
    last_name: '',
    password: '',
    errors: {
      Email: '',
      first_name: '',
      last_name: '',
      password: ''
    }
  };
handle_change = event => { event.preventDefault();
const { name, value } = event.target;
let errors = this.state.errors;



this.setState({errors, [name]: value});
};

  render() {
    const {errors} = this.state;
    return (
      <form onSubmit={(e) => this.props.handle_signup(e, this.state)}>
        <label htmlFor="Email">Email</label>
        <div className="inpSec">
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
        <label htmlFor="first_name">Name</label>
        <div className="inpSec">
        <input
          placeholder="Enter Your Name"
          type="text"
          autoComplete="off"
          required="required"
          name="first_name"
          value={this.state.first_name}
          onChange={this.handle_change}
        />
        </div>
        <label htmlFor="last_name">Surname</label>
        <div className="inpSec">
          <input
            placeholder="Enter Your Surname"
            type="text"
            required="required"
            autoComplete="off"
            name="last_name"
            value={this.state.last_name}
            onChange={this.handle_change}
          />
        </div>
        <label htmlFor="password">Password</label>
        <div className="inpSec">
          <input
            placeholder="Enter Password"
            type="password"
            required="required"
            name="password"
            value={this.state.password}
            onChange={this.handle_change}
          />
        </div>
        <input type="submit" className="submit" value="Sign Up" />
      </form>
    );
  }
}

export default Signup;

Signup.propTypes = {
  handle_signup: PropTypes.func.isRequired
};
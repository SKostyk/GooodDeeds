import React, { Component } from "react";
import First from "./First_page";
import SignIn from "./Login_page";
import Signup from "./register_page";

import "./App.css";
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}
class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      displayed_page: '',
      logged_in:  false,
      username: '',
      first_name: '',
      current_page: '/app',
    };
  }

  handle_login = (e, data) => {
    e.preventDefault();
    if(validateForm(data.errors)) {
    fetch('http://127.0.0.1:8000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        if(json.user !== undefined){
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          displayed_page: '',
          email: json.user.email,
          first_name: json.user.first_name,
          current_page: '/home'
        })    
      window.location = this.state.current_page;
      }else{
        alert('Wrong password or email');
      }
    });
    }
    else{
      console.error('Invalid Form');
    }
  };

  handle_signup = (e, data) => {
    e.preventDefault();
    console.log(data);
    if(validateForm(data.errors)) {
    fetch('http://127.0.0.1:8000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        console.log(json.email[0]);
        if(json.email[0] !== "A user with that email already exists."){
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          displayed_page: '',
          email: json.email,
          first_name: json.first_name,
          current_page: '/home'
        });
        window.location = this.state.current_page;
      }else{
        alert('This email is already used!');
      }
    });
    }
    else{
      console.error('Invalid Form');
    }
  };

  display_page = page => {
    this.setState({
      displayed_page: page
    });

  };

  render() {
    let form;
    switch (this.state.displayed_page) {
      case 'login':
        form = <SignIn handle_login={this.handle_login} />;
        break;
      case 'signup':
        form = <Signup handle_signup={this.handle_signup} />;
        break;
      default:
        form = null;
    }
      return (
        <div className="app_wrapper">
        <div className="loginContainer">
          <h1 className="title">Good Deeds</h1>
          <First logged_in={this.state.logged_in} display_page={this.display_page} />
          <div className="App">{form}</div>
        </div>
      </div>
      );
  }
}

export default App;
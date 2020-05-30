import React, { Component } from 'react';
import './Main.css'
class Main extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
          displayed_page: '',
          logged_in:  true,
          Email: '',
          first_name: '',
          current_page: '/home',
        };
      }
    }

export default Main;
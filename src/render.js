import { BrowserRouter, Route,Switch,Redirect} from 'react-router-dom';
import ReactDOM from "react-dom";
import React from "react";
import App from './App'
import Main from './Main'

export default function render(container) {
    ReactDOM.render(<Site />, container);
  }

   function isLoged(){
      let login = localStorage.getItem('token') ? true : false;
      console.log(login);
    return login;
  }
  export function Site(){
    return(
      <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => (!isLoged() ? <Redirect to="/app" /> : <Redirect form="/app"  to="/home" />)} />
        {isLoged() ? <Redirect from="/app" to="/home" /> : <Route exact={true} path="/app" component={App} />}
        {isLoged() ? <Route exact path="/home" component={Main} /> : <Redirect from="/home" to="/app" />}
      </Switch>
    </BrowserRouter>
    );
  }
import React from 'react';
import PropTypes from 'prop-types';

function First(props) {
  const logged_First = (
    <ul className="buttons">
          <li className="btn" onClick={() => props.display_page("login")}>
        
        <h1>login</h1> 

      </li>
      <li className="btn" onClick={() => props.display_page("signup")}>
        <h1>signup</h1> 
      </li>
    </ul>
  );

  return <div>{logged_First }</div>;
}

export default First;

First.propTypes = {
  logged_in: PropTypes.bool.isRequired,
};
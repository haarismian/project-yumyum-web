import React from 'react';

import { Link } from 'react-router-dom';

export default class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ul>
        <li>
          <Link to="/recipes">Recipe gallery</Link>
        </li>
        <li>
          <Link to="/new_recipe">New Recipe Page</Link>
        </li>
        <li>
          <Link to="/recipes">View Recipe</Link>
        </li>
      </ul>
    );
  }
}

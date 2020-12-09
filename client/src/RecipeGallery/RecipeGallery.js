import React from 'react';

import RecipeCard from '../components/RecipeCard';
import { recipes } from '../db';

export default class RecipeGallery extends React.Component {
  constructor(props) {
    super(props);
    this.recipes = this.props.recipes;
  }

  render() {
    return (
      <div>
        {recipes.map((recipe) => {
          return <RecipeCard />;
        })}
      </div>
    );
  }
}

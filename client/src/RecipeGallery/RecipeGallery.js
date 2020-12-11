import React from 'react';

import RecipeCard from '../components/RecipeCard';
import { recipes } from '../db';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';

function RecipeGallery(props) {
  let match = useRouteMatch();
  const recipes = props.recipes;

  return (
    <div>
      {recipes.map((recipe) => {
        return (
          <Link to={`${match.url}/${recipe.recipe_id}`}>
            <RecipeCard />
          </Link>
        );
      })}
    </div>
  );
}

export default RecipeGallery;

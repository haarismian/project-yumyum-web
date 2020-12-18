import React from 'react';

import RecipeCard from '../components/RecipeCard';
import RecipePage from '../RecipePage/RecipePage';
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
      <Switch>
        <Route path={`${match.path}/:recipe_id`}>
          <RecipePage />
        </Route>
        <Route path={match.path}>
          {recipes.map((recipe) => {
            return (
              <Link to={`${match.url}/${recipe.recipe_id}`}>
                <RecipeCard />
              </Link>
            );
          })}
        </Route>
      </Switch>
    </div>
  );
}

export default RecipeGallery;

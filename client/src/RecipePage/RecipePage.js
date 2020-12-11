import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';

function RecipePage() {
  let { recipe_id } = useParams();
  return <h3>Requested topic ID:{recipe_id}</h3>;
}

export default RecipePage;

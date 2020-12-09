import logo from './logo.svg';
import './App.css';

import db from './db';

import RecipeGallery from './RecipeGallery/RecipeGallery';

function App() {
  return (
    <div className="App">
      <RecipeGallery recipes={db} />
    </div>
  );
}

export default App;

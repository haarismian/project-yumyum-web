require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.use(express.json());

//Get all recipes
app.get('/API/v1/recipes', (req, res) => {
  console.log('get all recipes route has been hit backend');
  res.status(200).json({
    status: 'success',
    data: {
      recipes: ['Big mac', 'Little mac'],
    },
  });
});

// Get single recipe
app.get('/API/v1/recipes/:recipe_id', (req, res) => {
  console.log(req.params);

  res.status(200).json({
    status: 'Success',
    data: {
      recipe: 'Big Mac',
    },
  });
});

// POST a  single recipe
app.post('/API/v1/recipes', (req, res) => {
  console.log(req.body);

  res.status(201).json({
    status: 'Success',
    data: {
      recipe: 'Big Mac',
    },
  });
});

// UPDATE a  single recipe
app.put('/API/v1/recipes/:recipe_id', (req, res) => {
  console.log(req.params.recipe_id);
  console.log(req.body);

  res.status(200).json({
    status: 'Success',
    data: {
      recipe: 'Big Mac',
    },
  });
});

// DELETE a  single recipe
app.delete('/API/v1/recipes/:recipe_id', (req, res) => {
  res.status(204).json({
    status: 'Success',
  });
});

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`server is up and listening on PORT: ${PORT}`);
});

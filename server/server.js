require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

const db = require('./db');

const app = express();

app.use(morgan('dev'));

app.use(express.json());

//Get all recipes
app.get('/API/v1/recipes', async (req, res) => {
  try {
    const results = await db.query('SELECT * FROM recipes');

    console.log(results.rows);

    res.status(200).json({
      status: 'success',
      results: results.rows.length,
      data: {
        recipes: results.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// Get single recipe
app.get('/API/v1/recipes/:recipe_id', async (req, res) => {
  try {
    //Should never use string interpolation or template literals (taking string from front end into query), but to instead use this "parameterized query" thanks to pg library
    //This $1 represents the first value of the array. Look up pg docs
    const results = await db.query('SELECT * FROM recipes WHERE id = $1;', [
      req.params.recipe_id,
    ]);

    res.status(200).json({
      status: 'success',
      results: results.rows.length,
      data: {
        recipes: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
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

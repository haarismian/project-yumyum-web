require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

const db = require('./db');

const app = express();

//morgan used for logging
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
app.post('/API/v1/recipes', async (req, res) => {
  //params is for route parameters (the /:id stuff) and body is for the actual request contents
  try {
    const results = await db.query(
      'INSERT INTO recipes (name, cuisine, price_range) values ($1, $2, $3)',
      [req.body.name.req.body.cuisine, req.body.price_range]
    );
    console.log(results);
    res.status(200).json({
      status: 'Success',
      data: {
        recipe: 'Big Mac',
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// UPDATE a  single recipe TODO
app.put('/API/v1/recipes/:recipe_id', async (req, res) => {
  console.log(req.params.recipe_id);
  console.log(req.body);

  // try {
  //   const results = await db.query(
  //     'INSERT INTO recipes (name, cuisine, price_range) values ($1, $2, $3)',
  //     [req.params.name.req.params.cuisine, req.params.price_range]
  //   );
  //   console.log(results);
  //   res.status(200).json({
  //     status: 'Success',
  //     data: {
  //       recipe: 'Big Mac',
  //     },
  //   });
  // } catch (error) {
  //   console.log(err);
  // }
});

// DELETE a  single recipe TO DO
app.delete('/API/v1/recipes/:recipe_id', (req, res) => {
  res.status(204).json({
    status: 'Success',
  });
});

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`server is up and listening on PORT: ${PORT}`);
});

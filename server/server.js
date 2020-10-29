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
    const results = await db.query('SELECT * FROM recipes ORDER BY id ASC');

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
  console.log(req.body);
  try {
    const results = await db.query(
      //returning * will give us back the response from here
      'INSERT INTO recipes (name, cuisine, price_range) values ($1, $2, $3) returning *',
      [req.body.name, req.body.cuisine, req.body.price_range]
    );
    console.log(results);
    res.status(200).json({
      status: 'Success',
      data: {
        recipe: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// UPDATE a  single recipe TODO
app.put('/API/v1/recipes/:recipe_id', async (req, res) => {
  try {
    const results = await db.query(
      // id in the DB should always be passed as recipe_id
      'UPDATE recipes SET name = $1, cuisine = $2, price_range = $3 where id = $4 returning *;',
      [
        req.body.name,
        req.body.cuisine,
        req.body.price_range,
        req.params.recipe_id,
      ]
    );
    console.log(results);
    res.status(200).json({
      status: 'Success',
      data: {
        recipe: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// DELETE a  single recipe TO DO
app.delete('/API/v1/recipes/:recipe_id', async (req, res) => {
  try {
    const results = await db.query(
      'DELETE FROM recipes WHERE id = $1 returning *;',
      [req.params.recipe_id]
    );
    console.log(results);
    res.status(200).json({
      status: 'Success',
      data: {
        recipe: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`server is up and listening on PORT: ${PORT}`);
});

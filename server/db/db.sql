CREATE TABLE recipes (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  cuisine VARCHAR(50) NOT NULL,
  price_range INT NOT NULL check (
    price_range >= 1
    and price_range <= 5
  )
);
INSERT INTO recipes (name, cuisine, price_range)
VALUES ('Butter Chicken', 'Indian', 2);
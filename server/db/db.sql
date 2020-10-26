CREATE TABLE recipes (
  id BIGSERIAL NOT NULL,
  name VARCHAR(50) NOT NULL,
  cuisine VARCHAR(50) NOT NULL,
  price_range INT NOT NULL check (price_range >= 1 and price_range <=5)
);


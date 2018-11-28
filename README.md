# Sequelize Express Exercise

## Set up
- `cd` into `express-db-lab`
- run `createdb nobel_prizes_db`
- run `npm install`
- run `npm run resetDb` and `npm run seed`
- Start up the server with `npm start` and try navigating to the root route

### The Index Route

Write a route handler for `/prizes` that uses the `Prize` model to fetch all prizes from the db and then render them in the response

### The Show Route

Write a route handler `prizes/:id` that fetches a particular Prize by the id passed in `:id` param.  Hint: Don't forget to coerce the id to an Int.

## Bonus

Try to implement another route for fetching a list of prizes based on category

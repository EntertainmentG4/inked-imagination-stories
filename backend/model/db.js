const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "razan123",
  host: "localhost",
  port: 5433,
  database: "inked-imagination-stories",
});

module.exports = pool;

const { Sequelize } = require('sequelize');

// Database configurations
const dbConfigs = {
    dev: {
      database: 'dev_db',
      username: 'admin',
      password: 'admin',
      host: 'localhost',
      dialect: 'mysql',
  },
  test: {
    database: 'test_db',
    username: 'test_user',
    password: 'test_password',
    host: 'localhost',
    dialect: 'mysql',
  },
  prod: {
    database: 'prod_db',
    username: 'prod_user',
    password: 'prod_password',
    host: 'localhost',
    dialect: 'mysql',
  },
  // Add more database configurations as needed
};

// Determine the environment (NODE_ENV)
const env = process.env.NODE_ENV || 'dev';

// Create a Sequelize instance based on the environment
const sequelize = new Sequelize(
  dbConfigs[env].database,
  dbConfigs[env].username,
  dbConfigs[env].password,
  {
    host: process.env.DB_HOST,
    dialect: dbConfigs[env].dialect,
    logging: false,
    // Add additional Sequelize options here, if needed
  }
);

sequelize.sync()
// Export the Sequelize instance


module.exports = sequelize;

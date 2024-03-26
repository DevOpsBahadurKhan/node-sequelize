const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Post = sequelize.define('Post', {
  post_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  
  title: {
    type: DataTypes.STRING,
    allowNull: false,
     },
  
  description: {
    type: DataTypes.STRING,
    allowNull: false,
     },
 
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  
}, {
  tableName: 'posts', // Specify the table name to match your SQL table name
  timestamps: false, // Disable Sequelize's default timestamps
});

module.exports = Post;

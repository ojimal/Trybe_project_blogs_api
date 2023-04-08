'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
      id: DataTypes.INTEGER,
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      tableName: 'users',
      timestamps: false,
      underscored: true,
    }
  );

  User.associate = (models) => {
    User.hasMany(models.BlogPost, { foreignKey: 'userId', as: 'blog_posts' });
  };

  return User;
};
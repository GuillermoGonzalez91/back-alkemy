'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Organization extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Organization.hasMany(models.User, {
        foreignKey: 'organizationId',
        as: 'user',
      });
      Organization.hasOne(models.SocialMedia, {
        foreignKey: 'organizationId',
        as: 'socialMedia',
      });
    }
  }
  Organization.init(
    {
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      phone: DataTypes.INTEGER,
      address: DataTypes.STRING,
      welcomeText: DataTypes.STRING(1000),
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Organization',
      paranoid: true,
    }
  );
  return Organization;
};

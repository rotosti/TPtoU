const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class SubTier extends Model {}

SubTier.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tier_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'product',
          key: 'id',
        },
      }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'subtier',
    timestamps: false,
  }
);

module.exports = SubTier;

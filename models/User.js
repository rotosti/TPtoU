const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');
const { create } = require('./Product');

class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        tier_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'subtier',
              key: 'id',
            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        firstname: {
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        streetaddress: {
            type: DataTypes.STRING,
            allowNull: false, 
        }, 
        zipcode: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }, 
        state: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },

    {
        hooks: {
            beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
        },
        sequelize,
        freezeTableName: true,
        timestamps: false,
        underscored: true,
        modelName: 'user',
    }
);



module.exports = User;

// upload 
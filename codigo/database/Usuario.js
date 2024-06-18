const { DataTypes, Sequelize } = require("sequelize");
const connection = require("./database");

const Usuario = connection.define(
  "usuario",
  {
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nome_usuario: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    email_usuario: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    senha_usuario: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    data_cadastro: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
  },
  {
    timestamps: false,
    tableName: "usuario",
  }
);


module.exports = Usuario;


 
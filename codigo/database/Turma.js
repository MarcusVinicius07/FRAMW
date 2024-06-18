const { DataTypes, Sequelize } = require("sequelize");
const connection = require("./database");

const Turma = connection.define(
  "turma",
  {
    id_turma: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
     },
    sala: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    horario: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    periodo: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  },
  {
    timestamps: true, 
    tableName: "turma", 
  }
);



module.exports = Turma;

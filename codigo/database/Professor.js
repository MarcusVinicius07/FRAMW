const { DataTypes, Sequelize } = require("sequelize");
const connection = require("./database");

const Professor = connection.define(
  "professor",
  {
    id_professor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    CPF_professor: {
      type: DataTypes.STRING(11),
      allowNull: false,
    },
    nome_professor: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    telefone_professor: {
        type: DataTypes.STRING(11),
        allowNull: false,
      },
    endereço_professor: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    CEP_professor: {
      type: DataTypes.STRING(8),
      allowNull: false,
    },
  },
  {
    timestamps: true, 
    tableName: "professor", 
  }
);



module.exports = Professor;
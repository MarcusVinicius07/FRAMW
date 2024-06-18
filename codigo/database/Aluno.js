const { DataTypes, Sequelize } = require("sequelize");
const connection = require("./database");


const Aluno = connection.define(
  "aluno",
  {
    id_aluno: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    CPF_aluno: {
      type: DataTypes.STRING(11),
      allowNull: false,
    },
    nome_aluno: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    endereco_aluno: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    telefone_aluno: {
      type: DataTypes.STRING(11),
      allowNull: false,
    },
    CEP_aluno: {
      type: DataTypes.STRING(8),
      allowNull: false,
    },
  },
  {
    timestamps: true, 
    tableName: "aluno", 
  }
);


module.exports = Aluno;
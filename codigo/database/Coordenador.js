const { DataTypes } = require('sequelize');
const connection = require('./database');

const Coordenador = connection.define('coordenador', {
    id_coordenador: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    CPF_coordenador: {
        type: DataTypes.STRING(11),
        allowNull: false,
    },
    nome_coordenador: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    telefone_coordenador: {
        type: DataTypes.STRING(11),
        allowNull: false,
    },
    endereco_coordenador: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    CEP_coordenador: {
        type: DataTypes.STRING(8),
        allowNull: false,
    },
}, {
    timestamps: true,
    tableName: 'coordenador',
});

module.exports = Coordenador;

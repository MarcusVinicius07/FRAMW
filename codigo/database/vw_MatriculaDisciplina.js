// vw_MatriculaDisciplina.js

const { DataTypes, Sequelize } = require("sequelize");
const connection = require("./database");
const Aluno = require("./Aluno");
const Disciplina = require("./Disciplina");
const Turma = require("./Turma");

const vw_MatriculaDisciplina = connection.define(
    "vw_matricula_disciplina",
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        id_turma: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Turma,
                key: "id_turma",
            },
        },
        id_aluno: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Aluno,
                key: "id_aluno",
            },
        },
        id_disciplina: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Disciplina,
                key: "id_disciplina",
            },
        },
    },
    {
        sequelize: connection,
        modelName: "vw_MatriculaDisciplina",
        tableName: "vw_matricula_disciplina",
        timestamps: false,
    }
);

// Definindo as associações
vw_MatriculaDisciplina.belongsTo(Aluno, { foreignKey: 'id_aluno', as: 'Aluno' });
vw_MatriculaDisciplina.belongsTo(Disciplina, { foreignKey: 'id_disciplina', as: 'Disciplina' });
vw_MatriculaDisciplina.belongsTo(Turma, { foreignKey: 'id_turma', as: 'Turma' });

module.exports = vw_MatriculaDisciplina;




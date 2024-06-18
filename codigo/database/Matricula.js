const { DataTypes, Sequelize } = require("sequelize");
const connection = require("./database");
const Aluno = require("./Aluno"); // Importe o modelo Aluno
const Curso = require("./Curso"); // Importe o modelo Curso

const Matricula = connection.define('Matricula', {
  id_matricula: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
  },
  id_aluno: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
          model: Aluno,
          key: 'id_aluno',
      },
  },
  data_matricula: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
  },
  id_curso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
          model: Curso,
          key: 'id_curso',
      },
  },
}, {
  tableName: 'matriculas',
  timestamps: false,
});

// Associações
Matricula.belongsTo(Aluno, { foreignKey: 'id_aluno', as: 'Aluno' });
Matricula.belongsTo(Curso, { foreignKey: 'id_curso', as: 'Curso' });

module.exports = Matricula;





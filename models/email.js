module.exports = (sequelize, DataTypes) => {
    const Email = sequelize.define('Email', {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    }, {
      timestamps: true,
      tableName: 'sent_emails',
    });
  
    return Email;
  };
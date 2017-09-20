module.exports = function(sequelize, DataTypes) {
  var Appointments = sequelize.define("Appointments", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    month: {
      type: DataTypes.STRING,
      allowNull: false
    },
    day: {
      type: DataTypes.STRING,
      allowNull: false
    },
    time: {
      type: DataTypes.STRING,
      allowNull: false
    },
    am_pm: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gym: {
    type: DataTypes.STRING,
    allowNull: false
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "http://via.placeholder.com/318x180"
    }
}, {
      timestamps: false    
  });

  Appointments.associate = function(models) {
    models.Rookie.belongsToMany(models.Expert, { 
      through: Appointments 
    }, { 
      foreignKey: { 
        allowNull: true 
      }, 
      onDelete: 'CASCADE' 
    });
  
    models.Expert.belongsToMany(models.Rookie, { 
      through: Appointments 
    }, { 
      foreignKey: { 
        allowNull: true, 
      }, 
      onDelete: 'CASCADE' 
    }); 
  };

    return Appointments;
};
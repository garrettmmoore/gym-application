module.exports = function(sequelize, DataTypes) {
  var Rookie = sequelize.define("Rookie", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      primaryKey: true
    },
    userType: {
       type: DataTypes.STRING,
       allowNull: false
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "http://via.placeholder.com/318x180"
    },
    gym: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
      timestamps: false    
  });

    return Rookie;
};
import Sequelize from "sequelize";

export default (sequelize, DataTypes) => {
  return Coffee.init(sequelize, DataTypes);
};

class Coffee extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    super.init(
      {
        id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        quantity: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: "order",
        schema: "public",
        timestamps: false,
      }
    );
    return this;
  }
}

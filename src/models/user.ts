import { Sequelize, Model, DataTypes } from 'sequelize';

export class User extends Model {
    public id!: number;

    public name!: string;
    public age: string;

    public email: string;
    public  created_date!: Date;
    public  updated_date!: Date;
}

export default (sequelize: Sequelize) => {
    User.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        age: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: true
        }
    }, {
        sequelize,
        modelName: "user_details",
        tableName: "user_details",
        createdAt: "created_date",
        updatedAt: "updated_date"
    });
};
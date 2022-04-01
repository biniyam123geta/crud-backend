import config from "config";
import { Sequelize } from "sequelize";
import UserFactory,{ User } from "../models/user";


let sequelize: Sequelize;
export default async () => {
    let dbHost: string = config.get("database.host");
    let dbName: string = config.get("database.name");
    let dbUser: string = config.get("database.user");
    let dbLogging: boolean = config.get("database.logging");
    let dbPassword: string = config.get("database.password");
    let dbPort: number = parseInt(config.get("database.port"));
  
    const ON_DELETE = process.env.NODE_ENV === "test" ? "CASCADE" : "RESTRICT";
  
    sequelize = new Sequelize(dbName, dbUser, dbPassword, {
      host: dbHost,
      port: dbPort,
      dialect: "mysql",
      logging: dbLogging,
    });
  
    UserModuleInitalization(sequelize, ON_DELETE);
  
    sequelize
      .sync({ force: false })
      .then(() => {
        console.log("Connection has been established successfully.");
      })
      .catch((error: any) => {
        console.log(`Database connection error: ${error}`);
      });
  };
  const UserModuleInitalization = (sequelize: Sequelize, onDelete: string) => {
    UserFactory(sequelize);
  };
  export {
    sequelize,
    Sequelize,
    // user Module
    User,
  };
  
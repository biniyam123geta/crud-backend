
import bodyParser from 'body-parser';
import express, { Application, Request, Response } from 'express';
import initializeDB, { User, sequelize } from './database/Sequelize';
import routes from './route';
import cors from 'cors';
/**
 * Initialize Express App
 */
 const app: Application = express();
 app.use(bodyParser.json({limit: "50mb"}));
 app.use(bodyParser.urlencoded({ extended: true }));
 /**
 * Initialize Database
 */
  app.use(cors());
 initializeDB();

routes(app);
/**
 * Initialize Routes
 */
//routes(app);

export default app;
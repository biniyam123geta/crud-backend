import { Application } from 'express';

import crud from './crud';
let routes = (app: Application) => {
    app.use("/crud", crud);
};

export default routes;
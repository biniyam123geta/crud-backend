import express, { Router } from 'express';

import UserController from '../controller/crudController';

let router: Router = express.Router();

router
    /**
     *create
     */
    .post("/create", UserController.create)
      /**
     *read
     */
     .get("/read", UserController.read)
       /**
     *update
     */
    .post("/update", UserController.update)
      /**
     *delete
     */
     .delete("/delete/:id", UserController.delete);

export default router;
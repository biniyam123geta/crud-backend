import { User } from '../models/user';
import Service from '../services/services';
import { Request, Response } from 'express';


class UserController {
    
    /**
     * Create user
     * 
     * @param {Request} request 
     * @param {Response} response 
     */
    static create(request: Request, response: Response, next: Function) {
            Service.create(request.body.name,request.body.age,request.body.email)
                .then((result: User) => {
                    response.status(200).json(result);
                })
                .catch((error: Error) => {
                  console.log("error in controller");
                });
       
    }


       /**
     * Read user
     * 
     * @param {Request} request 
     * @param {Response} response 
     */
        static read(request: Request, response: Response, next: Function) {
            Service.read()
                .then((result: User[]) => {
                    response.status(200).json(result);
                })
                .catch((error: Error) => {
                  console.log("error in controller");
                });
       
    }


      /**
     * update user
     * 
     * @param {Request} request 
     * @param {Response} response 
     */
       static update(request: Request, response: Response, next: Function) {
        Service.update(request.body.id, request.body)
            .then((result: User) => {
                response.status(200).json(result);
            })
            .catch((error: Error) => {
              console.log("error in controller");
            });
   
}


 /**
     * Remove user
     * 
     * @param {Request} request 
     * @param {Response} response 
     */
  static delete(request: Request, response: Response, next: Function) {
    Service.delete(request.params.id)
        .then((result: number) => response.json(result))
        .catch((error: Error) => { 
            console.log(error);
            next(error);
        })
}

}

export default UserController;
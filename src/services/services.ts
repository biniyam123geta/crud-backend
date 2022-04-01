import async from "async";
import UserDal from "../Dals/dals";
import { User } from "../models/user";



class Service {


     /**
     * Create 
     * 
     * @param {string}      name 
     * @param {string}      age 
     * @param {string}      email  
     */
      static create(name: string, age: string, email: string): Promise<User> {
        return new Promise((resolve, reject) => {   
                    UserDal.create(name, age, email)
                        .then((result: User) => resolve(result))
                        .catch((error: any) => console.log("error in service",error));      
        });
    }

       /**
     * Read 
     * 
     * @param {string}      name 
     * @param {string}      age 
     * @param {string}      email  
     */
        static read(): Promise<User[]> {
            return new Promise((resolve, reject) => {   
                        UserDal.read([],[],[])
                            .then((result: User[]) => resolve(result))
                            .catch((error: any) => console.log("error in service",error));      
            });
        }

          /**
     * Update 
     * 
     * @param  id 
     * @param   payload  
     */
           static update(id: string, payload: any): Promise<User> {
            return new Promise((resolve, reject) => {
                async.waterfall([
                    (done: Function) => {
                        Service.findById(id)
                            .then((result: User) => {
                                if (result) {
                                    done(null, result);
                                }
                                else {
                                  console.log("user not found");
                                }
                            })
                            .catch((error: any) => done(error));
                    },
                    (userDetail: User, done: Function) => {
                        UserDal.update(userDetail, payload)
                            .then((result: User) => resolve(result))
                            .catch((error: any) =>console.log("error"));
                    }
                ], (error: Error) => {
                    if (error) {
                        reject(error);
                    }
                });
            });
        }


          /**
     * Find by id
     * 
     * @param {string} id
     */
    static findById(id: string): Promise<User> {
        return new Promise((resolve, reject) => {
            UserDal.findOne({ id: id },  [], [])
                .then((result: User) => resolve(result))
                .catch((error: any) => reject(error));
        });
    }



        /**
     * Delete Accessory
     * 
     * @param id 
     */
         static delete(id: string): Promise<number> {
            return new Promise((resolve, reject) => {
             
                UserDal.delete({id : id})
                            .then((result: number) => resolve(result))
                            .catch((error: any) => console.log("erorr"));
                    },
    
          
                );
            }
        }
export default Service;


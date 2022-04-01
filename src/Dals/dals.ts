import { DAL } from "../DAL";
import { User } from "../models/user";
import { Transaction } from "sequelize/types";


class UserDal implements DAL {

    /**
     * Create 
     * 
     * @param {string}      name 
     * @param {string}      age 
     * @param {string}      email 
     */
    static create(name: string, age: string, email: string, transaction?: Transaction): Promise<User> {
        return new Promise((resolve, reject) => {
            User.create({ 
                name: name,
                age: age,
                email: email,
            }, { transaction: transaction })
                .then((result: User) => resolve(result))
                .catch((error: any) => reject(error));
        });
    }

  /**
     * Find Many
     * @param query 
     * @param order 
     * @param includes 
     */
  static read(query: any, order: any, includes: any): Promise<User[]> {
    return new Promise((resolve, reject) => {
        User.findAll({ where: query, order: order, include: includes })
            .then((result: User[]) => resolve(result))
            .catch((error: any) => reject(error));
    });
}


 /**
     * Find One 
     * 
     * @param query 
     * @param order 
     * @param includes 
     */
  static findOne(query: any, order: any, includes: any): Promise<User> {
    return new Promise((resolve, reject) => {
        User.findOne({ where: query, order: order, include: includes })
            .then((result: User) => resolve(result))
            .catch((error: any) => reject(error));
    });
}


 /**
     * Update
     * 
     * @param {User}  user
     * @param {any}                 payload 
     * @param {Transaction}         transaction 
     */
  static update(user: User, payload: any, transaction?: Transaction): Promise<User> {
    return new Promise(async (resolve, reject) => {
        if (user) {
            user.name = payload.name != null ? payload.name : user.name;
            user.age = payload.age != null ? payload.age : user.age;
            user.email = payload.email != null ? payload.email : user.email;
            try {
                await user.save({ transaction: transaction });
                resolve(user);
            }
            catch (error) {
                reject(error);
            }
        }
        else {
            resolve(null);
        }
    });
}

 /**
     * Delete 
     * 
     * @param {any} query 
     */
  static delete(query: any): Promise<number> {
    return new Promise((resolve, reject) => {
        User.destroy({ where: query })
            .then((result: number) => resolve(result))
            .catch((error: any) => reject(error));
    });
}

}

export default UserDal;
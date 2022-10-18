import type {HydratedDocument, Types} from 'mongoose';
import type {React} from './model';
import ReactModel from './model';

/**
 * This file contains a class with functionality to interact with users stored
 * in MongoDB, including adding, finding, updating, and deleting. Feel free to add
 * additional operations in this file.
 *
 * Note: HydratedDocument<User> is the output of the UserModel() constructor,
 * and contains all the information in User. https://mongoosejs.com/docs/typescript.html
 */
class ReactCollection {
  /**
   * Add a freet to the collection
   *
   * @param {string} content - The id of the content of the freet
   * @return {Promise<HydratedDocument<React>>} - The newly created freet
   */
   static async addOne(content: string): Promise<HydratedDocument<React>> {
    const date = new Date();
    const react = new ReactModel({
      dateCreated: date,
      content
    });
    await react.save(); // Saves freet to MongoDB
    return react.populate('authorId');
  }
}

export default ReactCollection;

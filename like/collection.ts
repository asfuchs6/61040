import type {HydratedDocument, Types} from 'mongoose';
import type {Like} from './model';
import LikeModel from './model';

/**
 * This file contains a class with functionality to interact with freets that users like.
 * They can add a new like to a freet which will add it to a liked folder,
 * or delete a freet by id, and they can get all liked freets
 *
 */
class LikeCollection {
  /**
   * Add a like to a freet which will be added to the liked collection
   *
   * @param {string} content - The id of the content of the freet
   * @return {Promise<HydratedDocument<Like>>} - The newly created freet
   */
  static async addOne(content: string): Promise<HydratedDocument<Like>> {
    const date = new Date();
    const like = new LikeModel({
      dateCreated: date,
      content,
      dateModified: date
    });
    await like.save(); // Saves freet to MongoDB
    return like.populate('liked');
  }
  /**
   * Get all the liked freets
   *
   * @return {Promise<HydratedDocument<Like>[]>} - An array of all of the liked freets
   */
  static async findAll(): Promise<Array<HydratedDocument<Like>>> {
    // Retrieves freets and sorts them from most to least recent
    return LikeModel.find({}).sort({dateModified: -1}).populate('liked');
  }
  /**
   * Remove a like from a freet which will remove it from the liked collection
   *
   * @param {string} freetId - The freetId of freet to delete
   * @return {Promise<Boolean>} - true if the freet has been deleted, false otherwise
   */
  static async deleteOne(freetId: Types.ObjectId | string): Promise<boolean> {
    const freet = await LikeModel.deleteOne({_id: freetId});
    return freet !== null;
  }
}

export default LikeCollection;

import type {Request, Response, NextFunction} from 'express';
import {Types} from 'mongoose';
import LikeCollection from '../like/collection';
import FreetCollection from "../freet/collection";


/**
 * Checks if a freet with freetId is req.params exists
 */
const isFreetExists = async (req: Request, res: Response, next: NextFunction) => {
  const validFormat = Types.ObjectId.isValid(req.params.freetId);
  const freet = validFormat ? await FreetCollection.findOne(req.params.freetId) : '';
  if (!freet) {
    res.status(404).json({
      error: {
        freetNotFound: `Freet with freet ID ${req.params.freetId} does not exist.`
      }
    });
    return;
  }

  next();
};

/**
 * Checks if a freet with freetId is liked exists
 */
const isFreetLiked = async (req: Request, res: Response, next: NextFunction) => {
  const validFormat = Types.ObjectId.isValid(req.params.freetId);
  const freet = validFormat ? await FreetCollection.findOne(req.params.freetId) : '';
  if (!freet) {
    res.status(404).json({
      error: {
        freetNotFound: `Freet with freet ID ${req.params.freetId} does not exist.`
      }
    });
    return;
  }

  next();
};

export {
  isFreetExists,
  isFreetLiked
};

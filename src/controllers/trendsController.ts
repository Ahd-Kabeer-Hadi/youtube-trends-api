import { Request, Response, NextFunction } from 'express';
import trendsService from '../services/trendsService';
// import { setCache } from '../utils/cacheUtil';
// import logger from '../config/logger';

const handleResponse = async (serviceCall: (query: any) => Promise<any>, req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await serviceCall(req.query);
    // setCache(JSON.stringify(req.query), result);
    res.json(result);
    // logger.info(`GET ${req.path} - 200 - ${JSON.stringify(req.query)}`);
  } catch (error) {
    next(error);
  }
};

const getTrends = (req: Request, res: Response, next: NextFunction) =>
  handleResponse(trendsService.getTrends, req, res, next);

const getRelatedQueries = (req: Request, res: Response, next: NextFunction) =>
  handleResponse(trendsService.getRelatedQueries, req, res, next);

const getInterestByRegion = (req: Request, res: Response, next: NextFunction) =>
  handleResponse(trendsService.getInterestByRegion, req, res, next);

const getTrendingSearches = (req: Request, res: Response, next: NextFunction) =>
  handleResponse(trendsService.getTrendingSearches, req, res, next);

const getAutoComplete = (req: Request, res: Response, next: NextFunction) =>
  handleResponse(trendsService.getAutoComplete, req, res, next);

const getRelatedTopics = (req: Request, res: Response, next: NextFunction) =>
  handleResponse(trendsService.getRelatedTopics, req, res, next);

export default {
  getTrends,
  getRelatedQueries,
  getInterestByRegion,
  getTrendingSearches,
  getAutoComplete,
  getRelatedTopics
};

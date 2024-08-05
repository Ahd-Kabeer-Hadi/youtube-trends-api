import express from "express";
import trendsController from "../controllers/trendsController";

const router = express.Router();

router.get("/", trendsController.getTrends);
router.get("/related-queries", trendsController.getRelatedQueries);
router.get("/interest-by-region", trendsController.getInterestByRegion);
router.get("/trending-searches", trendsController.getTrendingSearches);
router.get("/auto-complete", trendsController.getAutoComplete);
router.get("/related-topics", trendsController.getRelatedTopics);

export default router;

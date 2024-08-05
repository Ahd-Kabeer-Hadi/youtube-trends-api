import * as googleTrends from "google-trends-api-code";
import getCurrentTrends from "../services/trend";
const trends = require("google-trends-api-code"); /// some of these functions does not work with ts-node and is not stable

// Define types for your service methods if needed
export interface TrendsService {
  getTrends: (query: googleTrends.InterestOverTimeOptions) => Promise<any>;
  getRelatedQueries: (
    query: googleTrends.RelatedQueriesOptions
  ) => Promise<any>;
  getInterestByRegion: (
    query: googleTrends.InterestByRegionOptions
  ) => Promise<any>;
  getTrendingSearches: (
    query: googleTrends.RealTimeTrendsOptions
  ) => Promise<any>;
  getAutoComplete: (query: googleTrends.AutoCompleteOptions) => Promise<any>;
  getRelatedTopics: (query: googleTrends.RelatedTopicsOptions) => Promise<any>;
}

// Common error handling function
const handleError = (error: any, context: string) => {
  console.error(`Error in ${context}:`, error);

  if (error.response) {
    console.error("Response data:", error.response.data);
    console.error("Response status:", error.response.status);
    console.error("Response headers:", error.response.headers);
    throw new Error(
      `Failed to ${context}: ${
        error.response.data.message || "Unknown error from server"
      }`
    );
  } else if (error.request) {
    console.error("Request data:", error.request);
    throw new Error(
      `No response received from the server while trying to ${context}.`
    );
  } else {
    console.error("Request error:", error.message);
    throw new Error(`Failed to ${context}: ${error.message}`);
  }
};

const trendsService: TrendsService = {
  async getTrends(query: googleTrends.InterestOverTimeOptions) {
    const {
      keyword,
      startTime,
      endTime,
      geo,
      hl,
      timezone,
      granularTimeResolution,
      category,
    } = query;
    try {
      const trendsData = await googleTrends.interestOverTime({
        keyword,
        startTime: new Date(startTime ? startTime : Date.now()),
        endTime,
        geo,
        hl,
        timezone,
        granularTimeResolution,
        category,
        property: "youtube",
      });

      console.log(trendsData);
      const parsedData = JSON.parse(trendsData);
      const timelineData = parsedData.default.timelineData;
      const averages = parsedData.default.averages;

      return {
        keyword,
        results: {
          timelineData,
          averages,
        },
      };
    } catch (error) {
      handleError(error, "fetch trends");
    }
  },

  async getRelatedQueries(query: googleTrends.RelatedQueriesOptions) {
    const {
      keyword,
      startTime,
      endTime,
      geo,
      hl,
      timezone,
      category,
      property,
    } = query;
    try {
      const relatedQueries = await googleTrends.relatedQueries({
        keyword,
        startTime: new Date(Date.now() - 4 * 60 * 60 * 1000),
        endTime,
        geo,
        hl,
        timezone,
        category,
        property,
      });

      const parsedData = JSON.parse(relatedQueries);
      return {
        keyword,
        results: parsedData,
      };
    } catch (error) {
      handleError(error, "fetch related queries");
    }
  },

  async getInterestByRegion(query: googleTrends.InterestByRegionOptions) {
    const {
      keyword,
      startTime,
      endTime,
      geo,
      hl,
      timezone,
      category,
      property,
      resolution,
    } = query;
    try {
      const interestByRegion = await googleTrends.interestByRegion({
        keyword,
        startTime: new Date(startTime ? startTime : Date.now()),
        endTime,
        geo,
        hl,
        timezone,
        category,
        property,
        resolution,
      });

      const parsedData = JSON.parse(interestByRegion);
      return {
        keyword,
        results: parsedData,
      };
    } catch (error) {
      handleError(error, "fetch interest by region");
    }
  },

  async getTrendingSearches(query: googleTrends.RealTimeTrendsOptions) {
    const { geo, category } = query;

    try {
      const trendingSearches = await trends.realTimeTrends(
        {
          geo,
          category,
        },
        function (err: any, results: any) {
          if (err) {
            console.log(err);
            throw new Error(err);
          } else {
            return results;
          }
        }
      );
      const parsedData = JSON.parse(trendingSearches);
      return {
        region: geo,
        category: category,
        results: parsedData,
      };
    } catch (error) {
      handleError(error, "fetch trending searches");
    }
  },

  async getAutoComplete(query: googleTrends.AutoCompleteOptions) {
    const { keyword, hl } = query;
    try {
      const autoComplete = await googleTrends.autoComplete({ keyword, hl });
      const parsedData = JSON.parse(autoComplete);
      return {
        keyword,
        results: parsedData,
      };
    } catch (error) {
      handleError(error, "fetch auto complete");
    }
  },

  async getRelatedTopics(query: googleTrends.RelatedTopicsOptions) {
    const {
      keyword,
      startTime,
      endTime,
      geo,
      hl,
      timezone,
      category,
      property,
    } = query;
    try {
      const relatedTopics = await googleTrends.relatedTopics({
        keyword,
        startTime: new Date(startTime ? startTime : Date.now()),
        endTime,
        geo,
        hl,
        timezone,
        category,
        property,
      });
      const parsedData = JSON.parse(relatedTopics);
      return {
        keyword,
        results: parsedData,
      };
    } catch (error) {
      handleError(error, "fetch related topics");
    }
  },
};

export default trendsService;

declare module "google-trends-api-code" {
  interface InterestOverTimeOptions {
    keyword: string | string[];
    startTime?: Date;
    endTime?: Date;
    geo?: string;
    hl?: string;
    timezone?: number;
    category?: number;
    property?: string;
    granularTimeResolution?: boolean;
  }

  interface InterestByRegionOptions {
    keyword: string | string[];
    startTime?: Date;
    endTime?: Date;
    geo?: string;
    hl?: string;
    timezone?: number;
    category?: number;
    property?: string;
    resolution?: string;
  }

  interface RelatedQueriesOptions {
    keyword: string | string[];
    startTime?: Date;
    endTime?: Date;
    geo?: string;
    hl?: string;
    timezone?: number;
    category?: number;
    property?: string;
  }

  interface RelatedTopicsOptions {
    keyword: string | string[];
    startTime?: Date;
    endTime?: Date;
    geo?: string;
    hl?: string;
    timezone?: number;
    category?: number;
    property?: string;
  }

  interface DailyTrendsOptions {
    geo: string;
    hl?: string;
  }

  interface RealTimeTrendsOptions {
    geo: string;
    category?: string;
    hl?: string;
    timezone?: number;
  }

  interface AutoCompleteOptions {
    keyword: string;
    hl?: string;
  }

  interface Results {
    [];
  }

  function interestOverTime(options: InterestOverTimeOptions): Promise<any>;
  function interestByRegion(options: InterestByRegionOptions): Promise<any>;
  function relatedQueries(options: RelatedQueriesOptions): Promise<any>;
  function relatedTopics(options: RelatedTopicsOptions): Promise<any>;
  function dailyTrends(options: DailyTrendsOptions): Promise<any>;
  function realTimeTrends(options: RealTimeTrendsOptions): Promise<any>;
  function autoComplete(options: AutoCompleteOptions): Promise<any>;
}

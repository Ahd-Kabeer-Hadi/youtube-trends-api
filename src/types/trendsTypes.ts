export interface TrendsOptions {
    keyword: string;
    geo?: string;
    hl?: string;
  }
  
  export interface TrendResult {
    trendingSearchesDays: TrendingSearchesDay[];
  }
  
  export interface TrendingSearchesDay {
    trendingSearches: TrendingSearch[];
  }
  
  export interface TrendingSearch {
    title: Title;
    formattedTraffic: string;
    relatedQueries: RelatedQuery[];
  }
  
  export interface Title {
    query: string;
    exploreLink: string;
  }
  
  export interface RelatedQuery {
    query: string;
    exploreLink: string;
  }
  
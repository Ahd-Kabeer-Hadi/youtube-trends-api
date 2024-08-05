const googleTrends = require("google-trends-api-code");
import * as trends from "google-trends-api-code";

const getCurrentTrends = async ({
  geo,
  category,
  property,
  keyword,
}: trends.InterestOverTimeOptions) => {
  googleTrends.interestOverTime({keyword: 'Valentines Day', startTime: new Date(Date.now() - (4 * 60 * 60 * 1000))}, function(err: any, results: any) {
    if (err) console.log('oh no error!', err);
    else console.log(results);
  });
};

console.log(getCurrentTrends({ geo: "US", category: 0, property: "youtube", keyword: "Valentines Day" }));

export default getCurrentTrends;

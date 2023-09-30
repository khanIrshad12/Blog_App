import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";
const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  // Graphql query
  const query = gql`
    query myQuery(
      $access_key: String!
      $categories: String!
      $keywords: String
    ) {
      myQuery(
        access_key: $access_key
        categories: $categories
        countries: "gb,us,in"
        keywords: $keywords
        limit: "100"
        sort: "published_desc"
      ) {
        data {
          author
          category
          country
          description
          image
          language
          published_at
          source
          title
          url
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
  `;
  // Fetch function with Next.js 13 caching

  const res = await fetch(
    "https://curimata.stepzen.net/api/rolling-uakari/__graphql",
    {
      method: "POST",
      cache: isDynamic ? "no-cache" : "default",
      next: isDynamic ? { revalidate: 0 } : { revalidate: 200 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `APIKey ${process.env.STEP_API_KEY}`,
      },
      body: JSON.stringify({
        query,
        variables: {
          access_key: process.env.MEDIASTACK_API_KEY,
          categories: category,
          keywords: keywords,
        },
      }),
    }
  );
  const newsResponse = await res.json();
  {/*console.log(
    "LOADING NEW DATA FROM API FOR CATEGORY >>>>",
    category,
    keywords
  );*/}
  //sort function by images vs not images vs not imagess present
    const data =sortNewsByImage(newsResponse.data.myQuery);
    
    return data
  
};
export default fetchNews;
//stepzen import curl "http://api.mediastack.com/v1/news?access_key=d24c121d089a5871f4376e4df9416467&countries=us%2Cgb&limit=100&offset=0&sort=published_desc"

import { categories } from "@/constants";
import fetchNews from "@/lib/FetchNews";
import Newslist from "./Newslist";
export default async function Home() {
  // fetch data
  const news: NewsResponse = await fetchNews(categories.join(","));
  return (
    <div>
      <Newslist news={news} />
    </div>
  );
}

import Newslist from "@/app/Newslist";
import { categories } from "@/constants";
import fetchNews from "@/lib/FetchNews";

type Props = {
  params: { category: Category };
};
const NewsCategory = async ({ params: { category } }: Props) => {
  const news: NewsResponse = await fetchNews(category);
  return (
    <div>
      <h1 className="headerTitle">
        <Newslist news={news} />
      </h1>
    </div>
  );
};
export default NewsCategory;

export function generateStaticParams() {
  return categories.map((category) => ({
    category: category,
  }));
}

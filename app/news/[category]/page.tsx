import Newslist from "@/app/Newslist";
import { categories } from "@/constants";
import fetchNews from "@/lib/FetchNews"

type Props = {
    params:{category:Category}
}

export const NewsCategory = async({params:{category}}: Props) => {
    const news:NewsResponse=await fetchNews(category)
  return (
    <Newslist news={news} />
  )
}
export default NewsCategory;

export function generateStaticParams(){
    return categories.map(category=>({
        category:category
    }))
}

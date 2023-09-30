import fetchNews from "@/lib/FetchNews"
import Newslist from "../Newslist"
type Props={
    searchParams?:{term:string}
}

const SearchPage =async({searchParams}:Props) => {
    const news:NewsResponse= await fetchNews(
        "general",
        searchParams?.term,
        true
    )
  return (
    <div><Newslist news={news} /></div>
  )
}

export default SearchPage
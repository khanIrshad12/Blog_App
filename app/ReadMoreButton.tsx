'use client'
import { useRouter } from "next/navigation";
type Props={
    article:Article
}
const ReadMoreButton = ({article}:Props) => {
    const router=useRouter();
    const handleButton=()=>{
        const queryString =Object.entries(article).map(([key,value])=>`${key}=${value}`).join("&");
        const url=`/article?${queryString}`;
        router.push(url)

    }
  return (
    <button className='h-10 bg-orange-400 rounded-b-lg dark:text-gray-900 hover:bg-orange-500' onClick={handleButton}>Read More</button>
  )
}

export default ReadMoreButton
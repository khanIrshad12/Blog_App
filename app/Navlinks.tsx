'use client'
import { categories } from "@/constants"
import Navlink from "./Navlink"
import {usePathname} from 'next/navigation';
const Navlinks = () => {
    const pathname=usePathname();
    
    const isActive=(path:string)=>{
        return pathname.split("/").pop() === path
    }
  return (
    <nav className="grid grid-cols-4 md:grid-cols-7 gap-4 pb-4 max-w-6xl mx-auto text-sx md:text-sm border-b">
        {categories.map((category)=>(
            <Navlink key={category} category={category} isActive={isActive(category)} />
        ))}
    </nav>
  )
}

export default Navlinks
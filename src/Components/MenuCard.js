import { useState } from "react"
import ItemsInfo from "./ItemsInfo"


export default function MenuCard({menuItems, foodSelected}){

    const [isOpen, setIsOpen] = useState(true);
    

    if("categories" in menuItems){
        return (
            <div className="w-full">
                <p className="text-3xl font-bold">{menuItems?.title}</p>
                <div>
                    {
                        menuItems?.categories?.map((items)=> <MenuCard key={items?.title} menuItems={items} foodSelected={foodSelected}></MenuCard>)
                    }
                </div>
            </div>
        )
    }

    if(!isOpen){
        return (
            <div className="w-full">
                <div className="flex justify-between w-full">
                <p className="text-2xl font-bold mb-3">{menuItems.title}</p>
                <button className="text-2xl font-bold mr-10" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'^':'˅'}</button>
                </div>
                <div className="h-4 bg-gray-200 mt-1"></div>
            </div>
        )
    }



    if(foodSelected==='veg'){
        return (
            <div className="w-full">
            <div className="flex justify-between w-full">
                <p className="text-3xl font-bold mb-3">{menuItems.title}</p>
                <button className="text-2xl font-bold mr-20" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'^':'˅'}</button>
            </div>
            <div>
                {
                    menuItems?.itemCards?.filter((food)=> "isVeg" in food?.card?.info)?.map((items)=> <ItemsInfo key={items?.card?.info?.id} itemInfo={items?.card?.info}></ItemsInfo>)
                }
            </div>
        </div>
        )
    }

    if(foodSelected==='nonveg'){
        return (
            <div className="w-full">
            <div className="flex justify-between w-full">
                <p className="text-3xl font-bold mb-3">{menuItems.title}</p>
                <button className="text-2xl font-bold mr-20" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'^':'˅'}</button>
            </div>
            <div>
                {
                    menuItems?.itemCards?.filter((food)=> !("isVeg" in food?.card?.info))?.map((items)=> <ItemsInfo key={items?.card?.info?.id} itemInfo={items?.card?.info}></ItemsInfo>)
                }
            </div>
        </div>       
        )
    }




    return (

        

        <div className="w-full">
            <div className="flex justify-between w-full">
                <p className="text-3xl font-bold mb-3">{menuItems.title}</p>
                <button className="text-2xl font-bold mr-20" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'^':'˅'}</button>
            </div>
            <div>
                {
                    menuItems?.itemCards?.map((items)=> <ItemsInfo key={items?.card?.info?.id} itemInfo={items?.card?.info}></ItemsInfo>)
                }
            </div>
        </div>
    )
}
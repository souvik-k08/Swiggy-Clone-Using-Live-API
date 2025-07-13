import { useParams } from "react-router"
import { useState, useEffect } from "react";
import MenuCard from "./MenuCard";
import { Link } from "react-router";

export default function RestaurantMenu(){

    let {id} = useParams();
    console.log(id);

    const [restData, setRestData] = useState([]);
    const [selected, setSelected] = useState(null);
    
        useEffect(()=>{
    
            async function fetchData() {
    
                const proxyServer = "https://thingproxy.freeboard.io/fetch/"
                const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
                const response = await fetch(proxyServer+swiggyAPI);
                const data = await response.json();
                const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
                const filterData = (tempData).filter((items)=> 'title' in items?.card?.card)

                setRestData(filterData);
            }
    
            fetchData();
        },[])

        console.log(restData);

    return (

        <div>

            <div className="w-[50%] mx-auto mt-10 mb-20">
                <Link to={`/city/delhi/${id}/search`}>
                <p className="w-full text-center py-2 rounded-3xl bg-gray-200 text-xl">Search For Dishes</p>
                </Link>
            </div>

            <div className="w-[50%] mx-auto mt-10 mb-20">
            <button className={`text-xl py-2 px-8 mr-4 border rounded-xl ${selected==="veg"? "bg-green-600":"bg-gray-300"}`} onClick={()=>setSelected(selected==='veg'?null:'veg')}>Veg</button>
            <button className={`text-xl py-2 px-4 border rounded-xl ${selected==="nonveg"? "bg-red-500":"bg-gray-300"}`} onClick={()=>setSelected(selected==='nonveg'?null:'nonveg')}>Non-veg</button>
            </div>


        <div className="w-[50%] mx-auto mt-10">
            {
                restData.map((menuItems)=><MenuCard key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card} foodSelected={selected}></MenuCard>)
            }
        </div>
        </div>
    )
}
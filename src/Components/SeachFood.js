import { useState, useEffect } from "react";
import { useParams } from "react-router"

export default function SeachFood(){

    const {id} = useParams();
    const [food, setFood] = useState("");        
    const [restData, setRestData] = useState([]);


    useEffect(()=>{
        
                async function fetchData() {
        
                    const proxyServer = "https://thingproxy.freeboard.io/fetch/"
                    const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
                    const response = await fetch(proxyServer+swiggyAPI);
                    const data = await response.json();
                    const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
                    const filterData = (tempData).filter((items)=> 'title' in items?.card?.card)
                    console.log(filterData);
    
                    setRestData(filterData);
                }
                fetchData();
            },[])
    

    return (
        <div className="w-[50%] mx-auto mt-20">
            <input className="w-full pl-10 py-3 text-xl bg-gray-100 shadow rounded-xl" placeholder="Search here" onClick={(e)=>setFood(e.target.value)}></input>
        </div>
    )
}
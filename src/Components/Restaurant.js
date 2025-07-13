import { useEffect, useState } from "react";
import RestCard from "./RestCard";
import Shimmer from "./Shimmer";

export default function Restaurant(){
    const [restData, setRestData] = useState([]);

    useEffect(()=>{

        async function fetchData() {

            const proxyServer = "https://thingproxy.freeboard.io/fetch/"
            const swiggyAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true";
            const response = await fetch(proxyServer+swiggyAPI);
            const data = await response.json();
            setRestData(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }

        fetchData();
    },[])


    // console.log(restData);

    // shimmer effect
    if(restData.length==0)
        // return <h1 className="h-full font-black text-9xl">Data is Loading............</h1>
        return <Shimmer/>

    return (
        <div className="flex flex-wrap mx-auto w-[80%] mt-20 gap-5">
            {
                restData.map((restInfo)=><RestCard key={restInfo?.info?.id} restInfo = {restInfo}></RestCard>)
            }
        </div>
    )
}



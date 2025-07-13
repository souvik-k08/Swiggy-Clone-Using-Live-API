import { useState } from "react"
import { addItems, IncrementItems, DecrementItems } from "../Stored/CartSlicer"

import { useDispatch } from "react-redux";

export default function ItemsInfo({itemInfo}){

    const [count, setCount] = useState(0);
    const dispatch = useDispatch();

    function handleAddItems(){
        setCount(1);
        dispatch(addItems(itemInfo))
    }

    function handleIncrement(){
        setCount(count+1);
        dispatch(IncrementItems(itemInfo));
    }

    function handleDecrement(){
        setCount(count-1);
        dispatch(DecrementItems(itemInfo));
    }


    return (
        <>

        <div className="flex w-full justify-between mb-2 pb-2">
            <div className="w-[70%] ">
                <p className="text-2xl text-gray-700 font-semibold mb-1">{itemInfo?.name}</p>
                <p className="text-xl">{"₹"+ ("defaultPrice" in itemInfo ? itemInfo.defaultPrice/100:itemInfo.price/100)}</p>
                <span className="text-green-600">{itemInfo?.ratings?.aggregatedRating?.rating}</span>
                <span>{"("+itemInfo?.ratings?.aggregatedRating?.ratingCountV2+")"}</span>
                <p>{itemInfo?.description}</p>
            </div>
            <div className="w-[20%] relative h-42">
                <img className="w-39 h-36 object-cover rounded-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+itemInfo?.imageId}></img>
                {
                    count === 0?(<button className="absolute bottom-4 left-6 text-green-600 px-8 py-2 bg-white border-white text-xl font-semibold rounded-xl shadow-md" onClick={()=>handleAddItems()}>ADD</button>):(
                      <div className="absolute bottom-4 left-6 flex gap-2 text-xl text-green-600 px-8 py-2 bg-white border-white  font-semibold shadow-md rounded-xl">
                        <button onClick={()=>handleDecrement()}>-</button>
                        <span>{count}</span>
                        <button onClick={()=>handleIncrement()}>+</button>
                      </div>  
                    )
                }
            </div>
        </div>
        <hr className="mb-6 mt-2"></hr>
        </>
    )
}
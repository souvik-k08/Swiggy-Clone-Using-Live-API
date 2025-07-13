import { useSelector } from "react-redux"

export default function RestHeader(){

    const counter = useSelector(state=> state.cartSlice.count);


    return (
        <div className="container w-[80%] mx-auto py-4 px-8 bg-gray-200 text-5xl flex justify-between items-center">
            <div>
                <p className="text-orange-500 font-bold">Swiggy</p>
            </div>
            <div>
                <p>Cart {`(${counter})`}</p>
            </div>
        </div>
    )
}
import { groceriesGridCards } from "../Utils/Grocery"
import GroceryCard from "./Grocerycard"

export default function GroceryOption(){

    return (
        <div className="mt-20 w-[80%] container mx-auto ">
            <h1 className="text-2xl font-bold">Shop Groceries On Instamart</h1>
            <div className="container mx-auto flex flex-nowrap overflow-x-auto mt-5 gap-3">
                {
                    groceriesGridCards.map((foodData)=><GroceryCard key={foodData.id} foodData = {foodData}></GroceryCard>)
                }
            </div>
        </div>
    )
}
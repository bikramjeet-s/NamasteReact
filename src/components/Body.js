import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/MockData";

const Body = () => {
    return (
        <div className='body'>
            <div className='filter'>
                <button className="filter-btn" onClick={()=>{console.log("There are no good Restaurants")}} onMouseOver={()=>{console.log("Do you wanna find a Good Restaurant")}}>Top Rated Restaurants</button>
            </div>
            <div className='res-container'>
                {
                    resObj.map((restaurant) => (<RestaurantCard key = {restaurant.info.id} resData = {restaurant}/>))
                }
            </div>
        </div>
    )
}

export default Body
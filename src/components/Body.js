import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/MockData";
import { useState } from "react";


const Body = () => {
  // Local State Variable - useState

  const [listOfRestaurants, setlistOfRestaurants] = useState(resObj);

  const handleClick = () => {
    const resData = resObj.filter((res) => res.info.avgRating >= 4);

    setlistOfRestaurants(resData)
  };

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onMouseOver={() => {
            console.log("Do you wanna find a Good Restaurant");
          }}

          onClick={handleClick}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

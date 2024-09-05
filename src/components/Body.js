import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/MockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


const Body = () => {
  // Local State Variable - useState

  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState([]);
  const [searchInput,setSearchInput] = useState("");

  useEffect(()=>{
    fetchData()
  },[])

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7362904&lng=76.741588&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const js_data = await data.json();

    // Optional Chaining
    setlistOfRestaurants(js_data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredListOfRestaurants(js_data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };

  // const arr = useState(resObj);
  // const listOfRestaurants = arr[0];
  // const setlistOfRestaurants = arr[1]; This achievest the same functionality

  const handleClick = () => {
    const resData = listOfRestaurants.filter((res) => res.info.avgRating >= 4);
    setFilteredListOfRestaurants(resData)
  };

  const handleSearchClick = () => {
    const resData = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchInput.trim().toLowerCase()))
    setFilteredListOfRestaurants(resData)
  }

  // if(listOfRestaurants.length === 0){
  //   return <Shimmer/>
  // }

  return filteredListOfRestaurants.length === 0 ? <Shimmer/> : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-input" value={searchInput} onChange={(e) => {
            setSearchInput(e.target.value)
            }}/>
          <button className="search-btn" onClick={handleSearchClick}>Search</button>
        </div>
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
        {filteredListOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

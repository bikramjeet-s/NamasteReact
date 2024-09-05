import { IMG_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
    const {resData} = props;
    const {name, cuisines, cloudinaryImageId, avgRating} = resData?.info;

    return (
        <div className='res-card'>
            <img className="res-logo" src={IMG_URL+cloudinaryImageId} />
            <h2>{name}</h2>
            <h2>{cuisines.join(',')}</h2>
            <h2>avgRating : {avgRating}</h2>

        </div>
    )
}

export default RestaurantCard
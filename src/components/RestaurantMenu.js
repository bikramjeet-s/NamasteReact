import Shimmer from './Shimmer';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { RES_MENU_URL } from '../utils/constants';

const RestaurantMenu = () =>{
    const [resMenuInfo,setResMenuInfo] = useState(null);

    const params = useParams()
    const fetchMenuData = async () =>{
        const data = await fetch(RES_MENU_URL+params.resId+"&catalog_qa=undefined&submitAction=ENTER")
        const resData = await data.json()
        setResMenuInfo(resData)
    }
    useEffect(()=>{
        fetchMenuData();
    },[])

    if (resMenuInfo === null) return <Shimmer/>


    const {name, cuisines, costForTwo, locality, city} = resMenuInfo?.data?.cards[2]?.card?.card?.info
    const REGULAR = resMenuInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
    const infoCards = REGULAR?.cards.filter((card) => (
        card?.card?.card?.itemCards != undefined))


    return resMenuInfo === null ? <Shimmer/> : (
        <div className='resMenu'>
            <div className='resInfo'>
                <h1>{name}</h1>
                <div className='resAddInfo'>
                    <p>Locality : {locality}, {city}</p>
                    <p>Cuisines : {cuisines.join(", ")}</p>
                    <p>Cost For Two : {costForTwo/100}</p>
                </div>
            </div>
            <div className='resMenuInfo'>
                <ul className='resMenuList'>
                    {infoCards.map((categoryCard,index)=>{
                        return (<li key={index}>
                            {categoryCard?.card?.card?.title}
                            <ul>
                                {categoryCard?.card?.card?.itemCards.map((menuInfo)=>{return(
                                    <li key={menuInfo.card?.info?.id}>
                                        {menuInfo?.card?.info?.name} : {(menuInfo?.card?.info?.price / 100) || (menuInfo?.card?.info?.defaultPrice / 100)}
                                    </li>
                    )})}
                            </ul>
                        </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default RestaurantMenu;
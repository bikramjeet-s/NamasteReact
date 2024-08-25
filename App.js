import React from 'react';
import ReactDOM from 'react-dom/client';

import logo from './logo.jpeg';

/**
 * Header
 *  - Logo
 *  - Nav items
 * Body
 *  - Search
 *  - RestaurantContainer
 *  - RestaurantCard
 *      - Res-logo
 *      - name
 *      - cuisine
 *      - rating
 * Footer
 *  -Copyright
 *  -Links
 *  -Address
 *  -Contact
 */
const resObj = [
    {
      "info": {
        "id": "514374",
        "name": "Kalsi Snack Bar",
        "cloudinaryImageId": "dosggryjeu1239u7wtjg",
        "locality": "Rahon Road",
        "areaName": "Samrala Chowk",
        "costForTwo": "₹100 for two",
        "cuisines": [
          "Chinese",
          "Italian-American",
          "Snacks"
        ],
        "avgRating": 3.1,
        "veg": true,
        "parentId": "307559",
        "avgRatingString": "3.1",
        "totalRatingsString": "3",
        "sla": {
          "deliveryTime": 58,
          "lastMileTravel": 10.2,
          "serviceability": "SERVICEABLE",
          "slaString": "55-60 mins",
          "lastMileTravelString": "10.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-08-25 22:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹39"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-26693cf9-c9d3-46f4-82ed-5db4f0f3e850"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/kalsi-snack-bar-rahon-road-samrala-chowk-ludhiana-514374",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "726580",
        "name": "SANT FAST FOOD",
        "cloudinaryImageId": "5e293c94dc18f34784f59c9eec2f70a7",
        "locality": "Prem VIhar",
        "areaName": "Samrala Chowk",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Chinese",
          "Snacks",
          "Pizzas"
        ],
        "avgRating": 3.8,
        "veg": true,
        "parentId": "177593",
        "avgRatingString": "3.8",
        "totalRatingsString": "6",
        "sla": {
          "deliveryTime": 60,
          "lastMileTravel": 11.1,
          "serviceability": "SERVICEABLE",
          "slaString": "55-60 mins",
          "lastMileTravelString": "11.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-08-25 22:50:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-26693cf9-c9d3-46f4-82ed-5db4f0f3e850"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/sant-fast-food-prem-vihar-samrala-chowk-ludhiana-726580",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "532198",
        "name": "MDG Paranthe Wale",
        "cloudinaryImageId": "v8c496jyfrjbr106qgge",
        "locality": "Khalsa Colony",
        "areaName": "Sector 32",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Snacks"
        ],
        "avgRating": 4.2,
        "parentId": "320267",
        "avgRatingString": "4.2",
        "totalRatingsString": "10+",
        "sla": {
          "deliveryTime": 65,
          "lastMileTravel": 11.8,
          "serviceability": "SERVICEABLE",
          "slaString": "60-65 mins",
          "lastMileTravelString": "11.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-08-25 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-26693cf9-c9d3-46f4-82ed-5db4f0f3e850"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/mdg-paranthe-wale-khalsa-colony-sector-32-ludhiana-532198",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "815420",
        "name": "Pezzo Perfetto",
        "cloudinaryImageId": "097e6429b742a80845c94a8cde747371",
        "locality": "Wakya Gopal Nagar",
        "areaName": "Samrala Chowk",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Burgers",
          "Chinese"
        ],
        "veg": true,
        "parentId": "485903",
        "avgRatingString": "--",
        "sla": {
          "deliveryTime": 59,
          "lastMileTravel": 11.5,
          "serviceability": "SERVICEABLE",
          "slaString": "55-60 mins",
          "lastMileTravelString": "11.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-08-25 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-26693cf9-c9d3-46f4-82ed-5db4f0f3e850"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/pezzo-perfetto-wakya-gopal-nagar-samrala-chowk-ludhiana-815420",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "576835",
        "name": "The Foodies Corner",
        "cloudinaryImageId": "dcbo65v9awrdwystarl3",
        "locality": "Tibba Road",
        "areaName": "Sector 32",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Chinese",
          "Burgers",
          "Fast Food",
          "Snacks"
        ],
        "avgRating": 3.8,
        "veg": true,
        "parentId": "208599",
        "avgRatingString": "3.8",
        "totalRatingsString": "7",
        "sla": {
          "deliveryTime": 59,
          "lastMileTravel": 11.6,
          "serviceability": "SERVICEABLE",
          "slaString": "55-60 mins",
          "lastMileTravelString": "11.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-08-25 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-26693cf9-c9d3-46f4-82ed-5db4f0f3e850"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/the-foodies-corner-tibba-road-sector-32-ludhiana-576835",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "810249",
        "name": "Cafe Gratitude",
        "cloudinaryImageId": "b24df2e39d347d35ee8497e891e762b0",
        "locality": "Mohalla Satkartar Nagar",
        "areaName": "Samrala Chowk",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Indian"
        ],
        "veg": true,
        "parentId": "483316",
        "avgRatingString": "--",
        "sla": {
          "deliveryTime": 59,
          "lastMileTravel": 11.5,
          "serviceability": "SERVICEABLE",
          "slaString": "55-60 mins",
          "lastMileTravelString": "11.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-08-25 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-26693cf9-c9d3-46f4-82ed-5db4f0f3e850"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/cafe-gratitude-mohalla-satkartar-nagar-samrala-chowk-ludhiana-810249",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "538852",
        "name": "JAMMU M/S TIBBI AND LUCKY",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/2/be43050b-68cc-405c-be77-515272b246d4_538852.jpg",
        "locality": "Samrala Chowk",
        "areaName": "Samrala Chowk",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Chinese"
        ],
        "veg": true,
        "parentId": "324253",
        "avgRatingString": "--",
        "sla": {
          "deliveryTime": 59,
          "lastMileTravel": 11.1,
          "serviceability": "SERVICEABLE",
          "slaString": "55-60 mins",
          "lastMileTravelString": "11.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-08-25 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-26693cf9-c9d3-46f4-82ed-5db4f0f3e850"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/jammu-m-s-tibbi-and-lucky-samrala-chowk-ludhiana-538852",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "817906",
        "name": "The Crispy Crust",
        "cloudinaryImageId": "ae09d7401ff4fc801c1a7a7d1eabd040",
        "locality": "Opp GK Estate",
        "areaName": "Samrala Chowk",
        "costForTwo": "₹248 for two",
        "cuisines": [
          "Burgers"
        ],
        "veg": true,
        "parentId": "207341",
        "avgRatingString": "--",
        "sla": {
          "deliveryTime": 59,
          "lastMileTravel": 11.4,
          "serviceability": "SERVICEABLE",
          "slaString": "55-60 mins",
          "lastMileTravelString": "11.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-08-25 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-26693cf9-c9d3-46f4-82ed-5db4f0f3e850"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/the-crispy-crust-opp-gk-estate-samrala-chowk-ludhiana-817906",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
  ]

const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className="logo" src={logo} style={{}} />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const Body = () => {
    return (
        <div className='body'>
            <div className='search'>
                <h2>Search</h2>
            </div>
            <div className='res-container'>
                {
                    resObj.map((restaurant) => (<RestaurantCard key = {restaurant.info.id} resData = {restaurant}/>))
                }
            </div>
        </div>
    )
}

const RestaurantCard = (props) =>{
    const {resData} = props;
    const {name, cuisines, cloudinaryImageId} = resData?.info;

    return (
        <div className='res-card'>
            <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} />
            <h2>{name}</h2>
            <h2>{cuisines.join(' ')}</h2>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body />
        </div>
    )
}




const root = ReactDOM.createRoot(document.getElementById('root')); // 


root.render(<AppLayout />);





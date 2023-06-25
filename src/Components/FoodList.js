import React,{useState,useEffect} from 'react'
import styles from './FoodList.css'
import { ReactComponent as DropDown} from './Images/Path 786.svg'
import Stamp from './Images/Group 359.png'
import Star from './Images/star.png'
import Fridge from './Images/Group 508.png'
import Dish from './Images/Mask Group 19.png'
import { Link } from 'react-router-dom';

export default function FoodList(props){
    const [dishInfo, setDishInfo] = useState(null);
    const ApiKey = process.env.REACT_APP_FOODLIST_API;
    useEffect(() => {
        const fetchData = async() => {
            try{
                let response= await fetch(ApiKey);
                const jsonData = await response.json();
                setDishInfo(jsonData);
        }
        catch (error) {
          console.log('Error:', error);
        }
    };
       fetchData();
    },[]);
    let [count,setCount] = useState(0);
    const handleAddCart=()=>{
        setCount(count + 1);
    } 
    const handleEmptyCart=()=>{
        setCount(0);
    }
    return(
        <>
            <div className="mainContainer">
                <div className="recommend">
                    <div className="recom pos">Recommended</div><DropDown className="DropArrow pos"/>
                    <div className="menu pos">Menu</div>
                </div>
                {dishInfo&&dishInfo.dishes.map(Element => (
                    <div className="foodContainer" key={Element.id}>
                        <div className="foodBox">
                            <p className="foodName pos">{Element.name}</p>
                            <img src={Stamp} className="Stamp pos"/>
                            <div className="Ratings pos"><span>{Element.rating}</span><img src={Star} className="Star" alt="" /></div>
                            <img src={Fridge} className="Fridge pos"alt=""/>
                            <p className="AplName pos">{Element.equipments[0]}</p>
                            <div className="line pos"></div>
                            <div className="Ingredients pos">Ingredients</div>
                            <Link onClick={props.handleViewList}className="list pos" to="/ingridents">View List</Link>
                            <p className='details pos'>{Element.description}</p>
                            <img src={Dish} className="Dish pos"alt=""/>
                            <div onClick={handleAddCart} className="Add pos">Add<span className='sign pos'>+</span></div>
                            <div className="line2 pos"></div>
                        </div>
                    </div>
                ))}
                <div className="cart flexi">
                    <div className='Tick'>&#10004;</div>
                    <div className="SelectedQuantity">{count}  food items selected</div>
                    <div onClick={handleEmptyCart}className="aro">&rarr;</div>
                </div>
            </div>
        </>
    )
}
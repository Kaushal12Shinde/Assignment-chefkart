import React, { useEffect, useState } from 'react'
import styles from './Ingridents.css'
import ImgRight from './Images/pngtree-herbal-ingredients-transparent-image-png-image_3206949-removebg-preview.png'
import ImgMid from './Images/Mask Group 17.png'
import Star from './Images/star.png'
import time from './Images/Group 393.png'
import { ReactComponent as DropDown} from './Images/Path 786.svg'
import Fridge from './Images/Mask Group 20.png'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function Ingridents(props) {
    const [ingredientsInfo, setIngredientsInfo] = useState(null);
    const ApiKey = process.env.REACT_APP_INGRIDENTS_API;
    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch(ApiKey);
            const jsonData = await response.json();
            setIngredientsInfo(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };

        fetchData();
    }, []);

    console.log(ingredientsInfo);
    return (
    <>
        <div className="notificationBar">
            <p>10:05 Am</p>
        </div> 
        <Link className='leftArrow pos' onClick={props.handleViewList} to={'/'}>&lt;</Link>
        <div className="backCircle pos"></div>
        <img className='ImgRight pos' src={ImgRight}/>
        <img className="ImgMid pos"src={ImgMid} alt="" />
        {ingredientsInfo&&<p className="dishName pos">{ingredientsInfo.name}</p>}
        <p className="dishDetails pos">Mughlai Masala is a style of cookery developed in the Indian Subcontinent by the imperial kitchens of the Mughal Empire.</p>
        <p className="dishRating pos">4.2 <span><img src={Star} className='star' alt="." /></span></p>
        <img src={time} alt="" className="watch pos" />
        {ingredientsInfo&&<p className='timeReq pos'>{ingredientsInfo.timeToPrepare}</p>} 
        <div className="borLine pos"></div> 
        <div className="Ingred pos">Ingredients</div>
        <div className="quantity pos">For 2 people</div>
        <div className="borLine2 pos"></div> 
        <div className="mainVege pos">
        {ingredientsInfo&&<span><div className="veg">Vegetables ({ingredientsInfo.ingredients.vegetables.length})</div><DropDown className="DropArrow"/></span>}
            <div className="listIngred">
                {ingredientsInfo&&ingredientsInfo.ingredients.vegetables.map(vegetable => (
                    <div className="item flexi" key={vegetable.name}>
                        <div className="itemName">{vegetable.name}</div>
                        <div className="itemQuantity">{vegetable.quantity}</div>
                    </div>
                ))}
            </div>
            {ingredientsInfo&&<span><div className="spices">Spices ({ingredientsInfo.ingredients.spices.length})</div><DropDown className="DropArrow"/></span>}
            <div className="listSpices">
                {ingredientsInfo&&ingredientsInfo.ingredients.spices.map(spice => (
                        <div className="itemSpice flexi" key={spice.name}>
                        <div className="itemName">{spice.name}</div>
                        <div className="itemQuantity">{spice.quantity}</div>
                        </div>
                ))}
            </div>
            <div className="Appliances">Appliances</div>
            <div className='list flexi'>
                {ingredientsInfo&&ingredientsInfo.ingredients.appliances.map(Element => (
                    <div className="listAppliance" key={Element.name}>
                        <div className="itemAppliance flexi">
                            <img className="itemImg" src={Fridge} alt=''/>
                            <div className="ApplianceName">{Element.name}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>    
    </>
  )
}

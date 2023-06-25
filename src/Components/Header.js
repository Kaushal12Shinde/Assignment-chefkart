import React from 'react'
import { ReactComponent as LeftNav } from './Images/Group 1541.svg';
import { ReactComponent as Date } from './Images/Select_date-01.svg';
import styles from './Header.css';
export default function Header() {
  return (
    <>
        <div className="globalTime">10:05 Am</div>
        
        <div className="innerBox">
            <div className="Selection flexi">
                <LeftNav/>
                <h4>Select Dishes</h4>
            </div>
        </div>
        
        <div className="blackBox flexi">
            <div className="calenderBox">
                <Date className=" calen pos"/>
                <p className='date pos'>21 May 2021</p>
                <div className="hline pos"></div>
                <div className='time pos'>10:30 Pm-12:30 Pm</div>
            </div>
        </div>

        <div className="cusine">
            <button className="inline-button active">Italian</button>
            <button className="inline-button">Indian</button>
            <button className="inline-button">Indian</button>
            <button className="inline-button">Indian</button>
            <button className="inline-button">Indian</button>
        </div>

        <div className='DishesContainer'>
            <p>Popular Dishes</p>
            <div className="dish">
                <div className="plates">Biryani</div>
                <div className="plates">Daal Batti</div>
                <div className="plates">Veg Korma</div>
                <div className="plates">Chicken Korma</div>
            </div>
        </div>
    </>
  )
}

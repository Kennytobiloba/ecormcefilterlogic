import React from 'react'
import "./Recommend.css"
import Btn from '../Btn/Btn'
const Recommend = ({handleClick}) => {
  return (
    <div>

<div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
        <Btn onClickHandler={handleClick} value="" name="text" title="All Product"/>
         <Btn onClickHandler={handleClick} value="Nike" name="text" title="Nike"/>
         <Btn onClickHandler={handleClick} value="Adidas" name="text" title="Adidas"/>
         <Btn onClickHandler={handleClick} value="Puma" name="text" title="Puma"/>
         <Btn onClickHandler={handleClick} value="Vans" name="text" title="Vans "/>
          
        </div>
      </div>
    </div>
  )
}

export default Recommend
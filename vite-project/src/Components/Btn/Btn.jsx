import React from 'react'

const Btn = ({value,title,onClickHandler}) => {
  return (
    <div>
         <button className='btns' value={value} onClick={onClickHandler} >{title}</button>
    </div>
  )
}

export default Btn
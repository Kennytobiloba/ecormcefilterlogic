import React from 'react'
import Input from '../../Input/Input'
import "./Category.css"

const Category = ({ handleChange}) => {
  return (
    <div>
    <h2 className="sidebar-title">Category</h2>
    <div>
     <label  className='sidebar-label-container'>
      <input onChange={handleChange} type="radio" value="" name="test" />
      <span className='checkmark'></span> All
     </label>
     <Input value="sneakers" title="Sneakers" handleChange={handleChange}/>
     <Input value="flats" title="Flats" handleChange={handleChange}/>
     <Input value="sandals" title="Sandals" handleChange={handleChange}/>
     <Input value="heels" title="Heels" handleChange={handleChange}/>
    </div>

    
     
  </div>
  )
}

export default Category
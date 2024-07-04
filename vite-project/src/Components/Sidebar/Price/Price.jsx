import React from 'react'
import "./Price.css"
import Input from '../../Input/Input'

const Price = ({handleChange}) => {
  return (
    <div className='ml'>
      <h2 className='sidebar-title'>
        Price
      </h2>
      <div>
      <label  className='sidebar-label-container'>
      <input onChange={handleChange} type="radio" value="" name="test" />
      <span className='checkmark'></span> All
     </label>
    </div>
     
 <Input handleChange={handleChange} value={50} title="$0- 50"  name="text2"/>
 <Input handleChange={handleChange} value={100} title="$50- 100"  name="text2"/>
 <Input handleChange={handleChange} value={150} title="$100- 150"  name="text2"/>
 <Input handleChange={handleChange} value={200} title="Over $150"  name="text2"/>
 
    </div>
  )
}

export default Price
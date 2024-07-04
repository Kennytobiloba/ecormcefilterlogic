import React from 'react'
import Input from '../../Input/Input'

const Colors = ({handleChange}) => {
  return (
    <div className='ml'>
    <h2 className='sidebar-title'>
      Colors
    </h2>
   <div>
   <label  className='sidebar-label-container'>
      <input onChange={handleChange} type="radio" value="" name="test" />
      <span className='checkmark'></span> All
     </label>
   <Input  handleChange={handleChange} value="black" name="text1" title="Black" color="black" />
   <Input  handleChange={handleChange} value="green" name="text1" title="Green" color="green" />
  
   <Input  handleChange={handleChange} value="blue" name="text1" title="Blue" color="blue" />
   <Input  handleChange={handleChange} value="red" name="text1" title="Red" color="red" />
   <label  className='sidebar-label-container'>
      <input type="radio"  onChange={handleChange} value="white " name='text1'  />
      <span className='checkmark' style={{backgroundColor:"white", border:"2px solid black"}}></span>
     </label>
    
   </div>

  </div>
  )
}

export default Colors
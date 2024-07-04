import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './Components/Sidebar/Sidebar'
import Navigation from './Components/Navgation/Navigation'
import Recommend from './Components/Recommend/Recommend'
import Products from './Components/Products/Products'
import products from './db/data'
import Card from './Components/Card/Card'


function App() {
  const [selectedCategory, setSelectedCategory] =useState(null)
  
  // input filter 
  const [query, setQuery] = useState("")

  const handleInputChange = event => {
    setQuery(event.target.value)
  }
  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
  // input section logic end

  // radio filter  logic

  const handleChange = event => {
    setSelectedCategory(event.target.value)
  }



  // radio filter  logic end


  // button filter  logic start
  const handleClick = event => {
    setSelectedCategory(event.target.value)
  }

   // button filter  logic end
  
 function filtereddata(products,selected,query){

  let filteredProducts = products
  console.log(filteredProducts)
// filter input intem search
  if(query) {
     filteredProducts = filteredItems
  }
  // filter input intem search end

  // selected filter

  if (selected) {
    filteredProducts = filteredProducts.filter(
      ({ category, color, company, newPrice, title }) =>
        category === selected ||
        color === selected ||
        company === selected ||
        newPrice === selected ||
        title === selected
    );
  }

  return filteredProducts.map(({img, title, star, reviews, prevPrice, newPrice}) => (
    <Card
    key={Math.random()}
    img={img}
    title={title}
    star={star}
    reviews={reviews}
    prevPrice={prevPrice}
    newPrice={newPrice}
    />
  ))

 }
 const result = filtereddata(products, selectedCategory, query);



  

  return (
  <div>
    <Sidebar handleChange={handleChange}/>
    <Navigation query={query} handleInputChange={handleInputChange}/>
    <Recommend handleClick={handleClick} />
    <Products result={result}/>

  </div>
  )
}

export default App

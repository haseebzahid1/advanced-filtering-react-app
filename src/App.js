import React, { useState } from "react";
import Nav from "./navigation/Nav";
import Products from "./Product/Products";
import Recommended from "./Recommended/Recommended";
import "./index.css";
import Sidebar from "./Sidebar";
import ProductData from "./db/data";
import Card from './component/Card'
const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");
 
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  
  };
 
  const filteredItems = ProductData.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(ProductData, selected, query) {   // function start

    let filteredProducts = ProductData;  // All product data

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
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

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );


  }   // filteredData (function end) 

  const result = filteredData(ProductData, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick = {handleClick} />
      <Products result={result} />
    </>
  );
};

export default App;

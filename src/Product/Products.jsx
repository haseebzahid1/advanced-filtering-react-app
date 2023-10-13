import './Products.css'
import Card from '../component/Card';
import { AiFillStar } from "react-icons/ai";
const Products = () => {
  return (
  <div className='card-container'>    
      <Card 
    img='https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg'
    title= "Nike Air Monarch IV"
    star = {<AiFillStar className="rating-star" />}
    reviews= "123 reviews"
    prevPrice= "$140,00"
    newPrice= "200"
    />
      <Card 
    img='https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg'
    title= "Nike Air Monarch IV"
    star = {<AiFillStar className="rating-star" />}
    reviews= "123 reviews"
    prevPrice= "$140,00"
    newPrice= "200"
    />
      <Card 
    img='https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg'
    title= "Nike Air Monarch IV"
    star = {<AiFillStar className="rating-star" />}
    reviews= "123 reviews"
    prevPrice= "$140,00"
    newPrice= "200"
    />
 
  </div>  
  )
}

export default Products
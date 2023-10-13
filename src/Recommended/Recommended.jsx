import './Recommended.css'
import Button from '../component/Button';


const Recommended = ({ handleClick }) => {
    return (
      <>
        <div>
          <h2 className="recommended-title">Recommended</h2>
          <div className="recommended-flex">
            <Button onClickHandler={() => console.log('empty')} value="" title="All Products" />
            <Button onClickHandler={() => console.log('Nike')} value="Nike" title="Nike" />
            <Button onClickHandler={() => console.log('Adidas')} value="Adidas" title="Adidas" />
            <Button onClickHandler={() => console.log('Puma')} value="Puma" title="Puma" />
            <Button onClickHandler={() => console.log('Vans')} value="Vans" title="Vans" />
          </div>
        </div>
      </>
    );
  };
  
  export default Recommended;
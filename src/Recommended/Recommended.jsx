import "./Recommended.css";
import Button from "../component/Button";

const Recommended = ({ handleClick }) => {
  const buttonData = [
    { value: "", title: "All Products" },
    { value: "Nike", title: "Nike" },
    { value: "Adidas", title: "Adidas" },
    { value: "Puma", title: "Puma" },
    { value: "Vans", title: "Vans" },
  ];
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          {buttonData.map((button, index) => (
            <Button
              key={index} // It's important to provide a unique key for React components rendered in a loop
              onClickHandler={handleClick}
              value={button.value}
              title={button.title}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Recommended;

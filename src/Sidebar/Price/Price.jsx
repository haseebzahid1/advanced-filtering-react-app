import Input from "../../component/Input";
import "./Price.css";
const Price = ({ handleChange }) => {

  const inputData = [
    { value: 50, title: "$0 - $50", name: "test2" },
    { value: 100, title: "$50 - $100", name: "test2" },
    { value: 150, title: "$100 - $150", name: "test2" },
    { value: 200, title: "Over $150", name: "test2" },
  ];
  
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Price</h2>

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>

        {inputData.map((input, index) => (
          <Input
            key={index} // It's important to provide a unique key for React components rendered in a loop
            handleChange={handleChange}
            value={input.value}
            title={input.title}
            name={input.name}
          />
        ))}
      </div>
    </>
  );
};

export default Price;

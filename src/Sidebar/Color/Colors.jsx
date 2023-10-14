import "./Colors.css";
import Input from "../../component/Input";

const Colors = ({ handleChange }) => {
  const inputColors = [
    { value: "black", title: "Black", name: "test1", color: "black" },
    { value: "blue", title: "Blue", name: "test1", color: "blue" },
    { value: "red", title: "Red", name: "test1", color: "red" },
    { value: "green", title: "Green", name: "test1", color: "green" },
  ];

  return (
    <>
      <div>
        <h2 className="sidebar-title color-title">Colors</h2>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test1" />
          <span className="checkmark all"></span>
          All
        </label>

        {inputColors.map((input, index) => (
          <Input
            key={index} // It's important to provide a unique key for React components rendered in a loop
            handleChange={handleChange}
            value={input.value}
            title={input.title}
            name={input.name}
            color={input.color}
          />
        ))}

        <label className="sidebar-label-container">
          <input
            onChange={handleChange}
            type="radio"
            value="white"
            name="test1"
          />
          <span
            className="checkmark"
            style={{ background: "white", border: "2px solid black" }}
          ></span>
          White
        </label>
      </div>
    </>
  );
};

export default Colors;

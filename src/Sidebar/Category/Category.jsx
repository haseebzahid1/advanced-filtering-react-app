import './Category.css'
import  Input from '../../component/Input'

const Category = ({handleChange}) => {

  const inputCategory = [
    { title: 'Sneakers', value: "sneakers", name: "test" },
    { title: "Flats", value: "flats", name: "test" },
    { title: "Sandals", value: "sandals", name: "test" },
    { title: "Heels", value: "heels", name: "test" },
  ];

    return (
      <div>
        <h2 className="sidebar-title">Category</h2>
  
        <div>
          <label className="sidebar-label-container">
            <input onChange={handleChange} type="radio" value="" name="test" />
            <span className="checkmark"></span>All
          </label>

          {inputCategory.map((input, index) => (
          <Input
            key={index} // It's important to provide a unique key for React components rendered in a loop
            handleChange={handleChange}
            value={input.value}
            title={input.title}
            name={input.name}
          />
        ))}
          
        </div>
      </div>
    );
}

export default Category



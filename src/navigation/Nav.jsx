import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";

const Nav = ({ handleInputChange, query }) => {
  return (
    <nav>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          // onChange={handleInputChange}
          // value={query}
          placeholder="Enter your search shoes."
        />
      </div>
      <div className="profile-container">
        <span href="#">
          <FiHeart className="nav-icons" />
        </span>
        <span href="">
          <AiOutlineShoppingCart className="nav-icons" />
        </span>
        <span href="">
          <AiOutlineUserAdd className="nav-icons" />
        </span>
      </div>
    </nav>
  );
};

export default Nav;


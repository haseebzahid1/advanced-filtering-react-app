import './Sidebar.css'
import Category from './Sidebar/Category/Category'
import Price from './Sidebar//Price/Price'
import Colors from './Sidebar/Color/Colors'
const Sidebar = () => {
  return (
    <section className="sidebar">
    <div className="logo-container">
      <h1>🛒</h1>
    </div>
    <Category  />
    <Price  />
    <Colors  />
  </section>
  )
}

export default Sidebar
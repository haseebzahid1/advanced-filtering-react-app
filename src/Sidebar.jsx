import './Sidebar.css'
import Category from './Sidebar/Category/Category'
import Price from './Sidebar//Price/Price'
import Colors from './Sidebar/Color/Colors'

const Sidebar = ({handleChange}) => {
  return (
    <section className="sidebar">
    <div className="logo-container">
      <h1>🛒</h1>
    </div>
    <Category handleChange={() => console.log('Category')} />
    <Price handleChange={() => console.log('Price')} />
    <Colors  handleChange={() => console.log('Color')} />
  </section>
  )
}

export default Sidebar
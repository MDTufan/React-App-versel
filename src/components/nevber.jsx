import './navber.css'
import logu from "../assets/lugo.png"
const Navber=()=>{
  return( 
  <div>
    <div className="container-nav">
      <div className="logu">
          <img src={logu} alt="" />
      </div>
      <div className="link-itens">
          <ul>
            <li><a href="">Order</a></li>
            <li><a href="">Order Review </a></li>
            <li><a href="">Manage Inventory</a></li>
            
          </ul>
      </div>
    </div>
  </div> 
  
  )
  
}
  
  export default Navber
  
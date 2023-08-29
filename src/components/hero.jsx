import './hero.css'
import imgages from "../assets/1.png"
const Hero=()=>{
  return( 
  <div>
   <div className="container">
      <div className="content-section">
        <p className='para-1'>Sale up to 70% off</p>
        <h1 className='headin-1'>New Collection For Fall</h1>
        <p className='para'>Discover all the new arrivals of ready-to-wear collection.</p>
        <button className='btn-1' type="btn">Shop Now</button>
      </div>
      <div className="img-section">
        <img src={imgages} alt="" />

      </div>
   </div>
   
  </div> 
  
  )
  
}
  
  export default Hero
  
import logo from './logo.svg';
import './App.css';
import Topnav from './Topnav'
function App() {
  return (
  <div>
    <Topnav/>
   

  
  
    <form className='body'>

      <div className="NS">
        <label className="tit">Name</label>
        <input type="text" name="Name" placeholder ="Tap your Name! "  />

        <label className="tit" >Surname</label> 
        <input type="text" name="Surname" placeholder ="Tap your Surname! " />
      </div>

    <label className="tit">Email</label>
      <input type="text" name="Email" placeholder ="Tap your Email ! "></input>

    <label className="tit">Password</label>
      <input type="text" name="Password" placeholder ="Tap your Password ! "></input>
      <div className='type'>
        <input type="radio" name="genre"/>    
        <label>Gender Man </label>
        <input type="radio" name="genre"/>
        <label>Gender Women </label>
      </div>

    <label className="tit">Date Of Birth</label>
        <input type="date" name="Date Of Birth "></input>
    

    <div className='but' >
    <input className="butt"  type="submit" value="submit" />
    <button className="butt" type="reset">Clear All</button>
    <button className="butt" type="submit">Log In</button>
    </div>

    </form>

  </div>

  )
}

export default App;

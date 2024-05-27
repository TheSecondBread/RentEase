import './App.css'
import Cookies from 'js-cookie';
import Createprop from './components/Createprop';
import Myprop from './components/Myprop';
import Allprops from './components/Allprops';
import { Analytics } from "@vercel/analytics/react"

function App() {

  const home=()=>{
    fetch("http://localhost:8000/user/profile", {
      method: "GET",
      headers: {"Authorization" : `Bearer ${Cookies.get("jwt")}`}
    })
    .then((resp)=>{
      return resp.json()
    })
    .then((data)=>{
      
      console.log(data)
    })
  }   
  return (
    <div style={{color:"black"}}>
   <h1>
    hello 
    <button onClick={()=>{home()}}>Click me</button>
   </h1>
   <Analytics></Analytics>
   <Createprop/>
   <Myprop/>
   <Allprops/>
    </div>
  )
}

export default App

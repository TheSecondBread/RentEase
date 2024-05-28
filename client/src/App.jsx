import './App.css'
import Cookies from 'js-cookie';


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
    </div>
  )
}

export default App

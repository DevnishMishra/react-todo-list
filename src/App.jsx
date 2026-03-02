import { useState } from "react";
import Header from "./Components/Header";

function App() {

  const[todos,settodos]=useState([]);


  return(
    <>
     <Header />
     <input type="text" placeholder="Enter a task" />
     <button >Add Todays task</button>
     
    </>
  )
}
export default App;
import React from "react";
import "./style.css";

export default function App() {
const[counter,setCounter]=React.useState(0)
const[number,setNumber]=React.useState(25)
const factorial =fact(number)

  return (
    <div>

      Factorial:{factorial}
      <button onClick={()=>setCounter(counter+1)}> Countr Inc </button>
      {/* <button onClick={()=>setNumber(number+1)}> Countr Inc </button> */}
      counter:{counter}

     </div>
  );
}
const fact=(n)=>{
  let answer=1;
  for(var i=n; i>=1; i--){
    answer =answer+1
  }
    console.log("Factorial function calling")
    return answer;
  }



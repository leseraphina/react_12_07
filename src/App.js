import { useState } from "react";
import Button from "./Button";
import Border from "./Border"
import './App.css'
function random(n){
return Math.ceil(Math.random()*n)
}

function App(){
  const [myHistory,setMyHistory] = useState([])
  const [otherHistory,setOtherHistory] = useState([])

  function playClick(){
    const nextMyNum = random(6);
    const nextOtherNum = random(6);
    setMyHistory([...myHistory,nextMyNum])
    setOtherHistory([...myHistory,nextOtherNum])   
  }
  function resetClick(){
    setMyHistory([])
    setOtherHistory([])
  }
  return (
    <div id="box">
      {/* button */}
      <div id="btn">
        {/* <Button text="start"/>
        <Button text="reset"/> */}
        <Button onClick={playClick}> start </Button>
        <Button onClick={resetClick}> reset </Button>
      </div>
      <div id="container">
        <Border name="A팀" color="blue" gameHistory={myHistory} />
        <Border name="B팀" color="red" gameHistory={otherHistory}/>
        </div>
    </div>
  )
}

export default App;

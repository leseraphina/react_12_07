import React from "react";
import ReactDOM from 'react-dom/client';
function HelloClass({title,color,room,num}){
  return (
    <>
    <h1>{title}</h1>
    <h2 style={
        { color:'red',
          fontSize:'50px',
          backgroundColor:'#000',
          textAlign:'center'}
        }>
      {color}</h2>
    <p>{room}</p>
    <p>{num}</p>
    </>
  )
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <React.StrictMode>
     <HelloClass
        title="it"
        color="red"
        room = "react"
        num = {10}
        />
  </React.StrictMode>
)
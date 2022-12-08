import React from "react";
import ReactDOM from 'react-dom/client';

class UlStr extends React.Component{
  render(){
    return (
      <>
      <h1>{this.props.title}</h1>
      <p>{this.props.year}</p>
      <p>{this.props.text}</p>
      </>
    )
  }
}
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <React.StrictMode>
      <UlStr 
        title="작품명"
        year={2001}
        text="설명"
        />
  </React.StrictMode>
)
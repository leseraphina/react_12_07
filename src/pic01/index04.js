import React from "react";
import ReactDOM from 'react-dom/client'
//  const str = {
//   str1 : 'sample01',
//   str2 : 'sample02',
//   str3 : 'sample03'
//  }
function MyApp(props){
  return (
    <ul id="one" className="two" name={5}>
      <li>{props.str1}</li>
      <li>{props.str2}</li>
      <li>{props.str3}</li>
    </ul>
  )
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
  <React.StrictMode>
  <MyApp 
      str1 = "sample01"
      str2 = "sample02"
      str3 = "sample03"
      />
  </React.StrictMode>
)
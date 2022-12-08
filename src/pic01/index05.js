import React from "react";
import ReactDOM from 'react-dom/client'
//  const str = {
//   str1 : 'sample01',
//   str2 : 'sample02',
//   str3 : 'sample03'
//  }
function MyApp({str1,str2,str3}){
  return (
    <ul id="one" className="two" name={5}>
      <li>{str1}</li>
      <li>{str2}</li>
      <li>{str3}</li>
    </ul>
  )
}
// 32
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
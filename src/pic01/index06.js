import React from "react";
import ReactDOM from 'react-dom/client';

function ReactBook({title,price,room}){
 
  return (
    <dl>
      <dt>제목</dt>
      <dd>{title}</dd>
      <dt>가격</dt>
      <dd>{price}</dd>
      <dt>클래스룸</dt>
      <dd>{room}</dd>
    </dl>
  )
}
// function ReactBook(props){
//   console.log(props)
//   return (
//     <dl>
//       <dt>제목</dt>
//       <dd>{props.title}</dd>
//       <dt>가격</dt>
//       <dd>{props.price}</dd>
//       <dt>클래스룸</dt>
//       <dd>{props.room}</dd>
//     </dl>
//   )
// }
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <React.StrictMode>
    <ReactBook
      title="React"
      price = "30000"
      room = "A강의실" />
  </React.StrictMode>
)
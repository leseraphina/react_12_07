import React from "react";
import ReactDOM from "react-dom/client";
//  컴포넌트
function App(){
  return (
      <>
      <h1>welcome React</h1>
      <h2>react 2</h2>
      </>
  )
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
// export
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

function Button({children,onClick,color='blue'}){
  // const className = `Button ${color} ${className}`
  return (
    <button onClick={onClick}>
    {children}
    </button>
  )
}


export default Button;
function Dimension ({
  element
}) {

  console.log(element)
//  const disabled = props.element.state == "X" || props.element.state == "A"
//  const styles = {backgroundColor: 'rgb(153, 158, 187)', color: 'white'}
  return(
      <div className="form-check" >    
      <input
          className="form-check-input skypad"
          type="checkbox"  />
      <label>
          {element}
      </label> 
      </div>
  )
}

export default Dimension
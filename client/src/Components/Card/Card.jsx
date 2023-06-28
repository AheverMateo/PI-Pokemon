import style from "./Card.module.css"
function Card(props) {
  return (
    
    <div className={style.cardConteiner}>
      <div>
      <img src={props.img} alt="" width="150px" height="150"/>
      <h4> Name: {props.name}</h4>
      <p>Type: {props.type} </p>
      </div>
    </div>

  )
}

export default Card
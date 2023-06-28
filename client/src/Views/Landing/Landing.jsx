import style from "./Landing.module.css"
import {Link} from "react-router-dom"
const Landing = () => {
  return (
    <div className={style.landing}>
  <div className={style.overlay}>
    <Link to="/home">
      <button>Mundo Pokemon</button>
    </Link>
  </div>
</div>
  )
}

export default Landing
import { Link } from "react-router-dom"

function NavBar() {
  return (
    <nav>
        <Link to = "/home"> Home </Link>
        <Link to = "forms"> New Pokemon </Link>
    </nav>
  )
}

export default NavBar
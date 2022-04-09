import { Link } from "react-router-dom";

export default function Nav(){
    return (
        <div className="Nav">
            <h1 className="title">iStonk</h1>
            <Link to={"/stocks"} className="nav-item"> Home </Link>
            <Link to={"/about"} className="nav-item"> About </Link>
        </div>
    )
}
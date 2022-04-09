import { Link } from "react-router-dom";

export default function Nav(){
    return (
        <div className="Nav">
            <h1 className="title">iStock</h1>
            <Link to={"/"}> Home </Link>
            <Link to={"/stocks"}> Stocks </Link>
            <Link to={"/about"}> About </Link>
        </div>
    )
}
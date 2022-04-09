import { Link } from "react-router-dom";

export default function Nav(){
    return (
        <div className="Nav">
            <Link to={"/"}> iStock </Link>
            <Link to={"/stocks"}> Stocks </Link>
            <Link to={"/about"}> About </Link>
        </div>
    )
}
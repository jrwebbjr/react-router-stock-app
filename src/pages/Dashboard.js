import { Link } from "react-router-dom";

export default function Dashboard(props){
    const { stocks, getStock } = props;
    
    return (
        <div>
            <table className="table">
            <tr>
                <th>Company</th>
                <th>Symbol</th>
                <th>Last Price</th>
            </tr>
                {stocks.map((element) => {
                    getStock(element)
                    return (
                        <>
                            <tr className="table">
                                <td>
                                    <Link to={`/stocks/${element.symbol}`}>{element.name}</Link>
                                    </td>
                                <td>{element.symbol}</td>
                                <td>{element.lastPrice}</td>
                            </tr>
                        </>
                    )
                })}
            </table>
        </div>
    )
}

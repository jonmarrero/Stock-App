import { useLoaderData } from 'react-router-dom'

const Price = (props) => {
    // get the data fetched by loader
        const stocksList = useLoaderData()
        const stock = stocksList[0]
        console.log(stock)

    return (<>
        <div className="stock">
            <h1>
                {stock.symbol} / {stock.name}
            </h1>
            <h2>price: {stock.price}</h2>
            <h3>change: {stock.change} ({stock.changesPercentage > 0 ? "+" : "-"}
            {stock.changesPercentage})
            </h3>
        </div>
    </>)
}

export default Price
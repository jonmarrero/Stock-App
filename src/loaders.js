export const priceLoader = async ({params}) => {
    const symbol = params.symbol
    const apiKey = "41e7a52ca685ae98f59d2ffd0aec504d"
    return (await fetch(`https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${apiKey}`)).json()
}

export default priceLoader

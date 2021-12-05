export const coinTableHeaders = ['Rank', 'Name', 'Price', 'Price Change (24h)', 'Market Cap', 'Volume (24h)']

export const coinLimits = [
    { label: 10, value: '10' },
    { label: 50, value: '50' },
    { label: 'All', value: 'all' }
]

export const chartColors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

export const apiEndPoints = {
    getCoinsData: '/api/cryptocurrency/listings/latest'
}
const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: 'USD',
    style: 'currency'
})
const formatCurrency = (number) => CURRENCY_FORMATTER.format(number)
export default formatCurrency
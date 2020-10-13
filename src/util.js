export default function formatCurreny(num){
    return "$ " + Number(num.toFixed(1)).toLocaleString() + " "
}
const bill = [3, 10, 2, 9];
const k = 1
const b = 12;

function bonAppetit(bill, k, b) {
    // Write your code here
    const sum = bill.reduce((a, b, index) => {
        if(k === index) return a;
        return a + b;
    });
    const fairAmount = Math.round(sum / 2);
    if(fairAmount === b) return console.log('Bon Appetit');
    console.log(b - fairAmount)
}

console.log(bonAppetit(bill, k, b))
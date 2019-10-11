module.exports = function multiply(first, second) {
  // your solution
    if (first === '0' || second === '0') {
        return '0'
    } else {
        const first_num = BigInt(first);
        const second_num = BigInt(second);
        const mult = BigInt(first_num*second_num);
        // convert number to string
        const result = mult.toString();
        return result;
        }
}

//console.log(multiply('329568934658432659586', '58379426534596'));
function multiply(first, second) {
    let i;
// your solution
    if (first === '0' || second === '0') {
        return '0'
    } else {
        const a = first.split('');//.reverse();
        const b = second.split('');//.reverse();
        let result = [];
        let res = 0;
        for (let x = 0; x < b.length; x++) {
            res = 0;
            for (i = 0; i < a.length; i++) {
                let m = a[i] * b[x];
                res = res + m*Math.pow(10,a.length-1-i);
                //console.log(m);
            }
            result.push(res);
        }
        let tran = result[result.length - 1];
        let outString = '';
        for (i=result.length-1; i>0; i--){
            tran = result[i-1]*10+tran;
            outString=tran%10+outString;
            console.log(outString);
            tran = Math.floor(tran/10);
        }
        return tran+outString;
        console.log(tran+outString);
    }
}

console.log(multiply('5','10'));



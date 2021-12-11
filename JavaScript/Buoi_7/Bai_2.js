let digits_1 = [1, 2, 3];
let digits_2 = [0];
let digits_3 = [9];

function Calculator(ele) {
    for(let i = ele.length - 1; i >=0; -- i) {
        if(ele[i] == 9){
            ele[i] = 0;
        }
        else {
            ++ ele[i];
            return ele;
        }
    }
    return [1, ...ele];
}

console.log(Calculator(digits_1));
console.log(Calculator(digits_2));
console.log(Calculator(digits_3));
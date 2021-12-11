function check (ele) {
    for(let i of ele) {
        if(ele.indexOf(i) == ele.lastIndexOf(i)) {
            return ele.indexOf(i);
        }
    }
    return -1;
}

let case_1 = "tranduong";
let case_2 = "hitclubhiuhiu";
let case_3 = "aabb";

console.log("Case 1: " + check(case_1));
console.log("Case 2: " + check(case_2));
console.log("Case 3: " + check(case_3));
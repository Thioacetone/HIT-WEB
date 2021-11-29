const case1 = "    hOang Bui   ";

const case2 = " hOANG      BUI   hOang     ";

const case3 = "23traN    dUOng23     ";

const Edit = (str) => {
    str = str.trim().toLowerCase();
    str = str.replace(/\d/gi, "");
    str = str.replace(/\s+/gi, " ");
    var s = str.split(" ");
    for (i in s) {
        s[i] = s[i].charAt(0).toUpperCase() + s[i].slice(1);
    }
    return s.join(" ");
}

console.log(Edit(case1));
console.log(Edit(case2));
console.log(Edit(case3));
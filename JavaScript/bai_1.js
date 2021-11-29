//Case 1
console.log("Case 1:");
var count = 1;
const nums = [1, 3, 5, 7, 1, 2, 3, 4, 5, 6];
nums.sort((a, b) => { return a - b });
for (i = 1; i < nums.length; i++) {
    if (nums[i] == nums[i - 1])
        ++count;
    else {
        console.log("So " + nums[i - 1] + " xuat hien " + count + " lan");
        count = 1;
    }
}
console.log("So " + nums[nums.length - 1] + " xuat hien " + count + " lan");
//Case 2
console.log("Case 2: ");
const nums1 = [1, 1, 1, 10, 23, 2, 26, 26];
count = 1;
nums1.sort((a, b) => { return a - b });
for (i = 1; i < nums1.length; i++) {
    if (nums1[i] == nums1[i - 1])
        ++count;
    else {
        console.log("So " + nums1[i - 1] + " xuat hien " + count + " lan");
        count = 1;
    }
}
console.log("So " + nums1[nums1.length - 1] + " xuat hien " + count + " lan");
//Case 3
console.log("Case 3: ");
const nums2 = [1000, 2000, 1000, 2000, 10000, 22222];
count = 1;
nums2.sort((a, b) => { return a - b });
for (i = 1; i < nums2.length; i++) {
    if (nums2[i] == nums2[i - 1])
        ++count;
    else {
        console.log("So " + nums2[i - 1] + " xuat hien " + count + " lan");
        count = 1;
    }
}
console.log("So " + nums2[nums2.length - 1] + " xuat hien " + count + " lan");
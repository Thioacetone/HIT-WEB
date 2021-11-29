const users = [
    { id: 1, name: "Hoang Bui", age: 19, gender: "male", money: 1000 },
    { id: 2, name: "Tran Duong", age: 14, gender: "female", money: 2000 },
    { id: 3, name: "Dinh Huan", age: 25, gender: "female", money: 1050 },
    { id: 4, name: "Minh Hoang", age: 15, gender: "male", money: 500 },
];

function Delete(id) {
    var index = 0;
    for (var i of users) {
        if (i.id == id) {
            users.splice(users.indexOf(i), 1);
        }
        index++;
    }
}
Delete(3);
console.log(users);
// Bài 2
// Cho 1 mảng người dùng như dưới
// 1. Tạo menu với các mục xem danh sách, thêm người dùng
// xoá người dùng theo id, cập nhật thông tin ngưỜi dùng theo id
// 2. Thêm 2 người vào mảng ban đầu trước khi làm ý này
// - Thống kê bao nhiêu nam,bao nhiêu người có tuổi lớn hơn 15 tuổi
// - Tính tổng tiền những người có id chẵn
// - Ai nghèo nhất, Ai giàu nhất
// 3. Chuyển hết những người có giới tính male về female

const users = [
    { id: 1, name: "Hoang Bui", age: 19, gender: "male", money: 1000 },
    { id: 2, name: "Tran Duong", age: 14, gender: "female", money: 2000 },
    { id: 3, name: "Dinh Huan", age: 25, gender: "female", money: 1050 },
    { id: 4, name: "Minh Hoang", age: 15, gender: "male", money: 500 },
];

//Cau 1.
console.log(`
        1. Xem danh sach nguoi dung
        2. Them nguoi dung
        3. Xoa nguoi dung theo id
        4. Cap nhat thong tin nguoi dung theo id 
    `)

function Show() {
    console.log("List:");
    console.log(users);
}

function Add(id, name, age, gender, money) {
    users.push({ id: id, name: name, age: age, gender: gender, money: money });
}

function Delete(id) {
    for (var i of users) {
        if (i.id == id) {
            users.splice(indexOf(i), 1);
        }
    }
}

function Update(id, name, age, gender, money) {
    for (var i of users) {
        if (i.id == id) {
            var x = users.indexOf(i);
            users[x].name = name;
            users[x].age = age;
            users[x].gender = gender;
            users[x].money = money;
        }
    }
}
//Cau 2.
Add(5, 'Viet', 19, 'male', 3000);
Add(6, 'Giang', 16, 'female', 3500);

function Count() {
    var countM = 0;
    var countFifteen = 0;
    for (var i of users) {
        if (i.gender == 'male') {
            countM++;
        }

        if (i.age > 15) {
            ++countFifteen;
        }
    }
    console.log(`Co ${countM} nguoi la nam gioi!`);
    console.log(`Co ${countFifteen} nguoi lon hon 15 tuoi!`);
}

function SumMoney() {
    var Sum = 0;
    for (var i of users) {
        if (!(i.id % 2)) {
            Sum += i.money;
        }
    }
    console.log(`Tong so tien nhung nguoi co id chan la ${Sum}!`);
}

function Poor_Rick() {
    var Min = users[0].money;
    var Max = Min;
    var x, y;
    for (var i of users) {
        if (i.money > Max) {
            Max = i.money;
            x = i;
        }
        if (i.money < Min) {
            Min = i.money;
            y = i;
        }
    }
    console.log('Nguoi giau nhat la: ' + x.name);
    console.log('Nguoi ngheo nhat la: ' + y.name);
}
console.log("Cau 2:");
Count();
SumMoney();
Poor_Rick();
//Cau 3.
function Reverse() {
    for (var i of users) {
        if (i.gender == 'male') {
            var x = users.indexOf(i);
            users[x].gender = 'female';
        }
    }
}
console.log("Cau 3:");
Reverse();
console.log("Sau khi doi gioi tinh:");
Show();
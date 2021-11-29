let Choose = (mail) => {
    let check = /\w+\@g(oolge)?mail\.com/g;
    return mail.match(check);
}
const textEmail = "mynamebvh@gmail.comdfklgjfdkjgkfdjgkldtranduong@gmail.com";
console.log(Choose(textEmail));

let Choosee = (phone) => {
    let check = /[0](\d+){9}/g;
    return phone.match(check);
}
const textPhone = "dfkdsklfjlksdjfklsd0979150921dfjhdsjfhds0979120734";
console.log(Choosee(textPhone));
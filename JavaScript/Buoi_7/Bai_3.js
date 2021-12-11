function Post(title, body, author, views, comments, isLive) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = views;
    this.comments = comments;
    this.isLive = isLive;
}

let show = new Post("ahihi", "Viet chimte", "ABCXYZ", 3000,
    [{author: 'Viet chimtee', body: "lewlew"}, 
    {author: 'A Huan dzai', body: "lewlew"},],true);

console.log(show);
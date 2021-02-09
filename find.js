var users = [
    { name: 'taro' },
    { name: 'ichiro' },
    { name: 'jiro' },
    { name: 'ichiro', id: 5 },
];

var user;

// for(var i = 0; i < users.length; i ++){
//     if (users[i].name === 'ichiro') {
//         user = users[i];
//         break;
//     }
// }

users.find(function(user){
    // 見つかった最初の要素のみが返される
    return user.name === 'ichiro';
});

user;
// ------------
function Car(model){
    this.model = model;
}

var cars = [
    new Car('toyota'),
    new Car('nissan'),
    new Car('ford'),
];

cars.find(function(car){
    return car.model === 'toyota';
});

// ------------
// ある comment に紐づく post を探す
var posts = [
    { id: 1, title: 'old' },
    { id: 2, title: 'new' }
];

var comment = {
    postId: 2, content: 'good'
};

function postForComment(posts, comment){
    // 直感的に意味がわかりやすいコードにできる
    return posts.find(function(post){
        return post.id === comment.postId;
    });
}

postForComment(posts, comment);
// ------------
// // 使用イメージ
// URL: "example/posts/10"
// const posts = [
//     {id: 1, title: 'hoge'},
//     {id: 2, title: 'fuga'},
//     {id: 3, title: 'hogehoge'},
//     {id: 10, title: 'fugafuga'},
// ];

// // id 10 を取得する
// const postId = getIdFromURL();

// posts.find(post => post.id === postId);

// ------------
var users = [
    { id: 1, admin: false },
    { id: 2, admin: false },
    { id: 3, admin: true }
];

var admin = users.find(function(user){
    return user.admin === true
});

admin

// ------------
var accounts = [
    { balance: -10 },
    { balance: 12 },
    { balance: 0 }
];

var account = accounts.find(function(account){
    return account.balance === 12;
})

account

// ------------
var ladders = [
    {id: 1, height: 20},
    {id: 3, height: 25}
]

// var sample = { id: 1, height: 20}

// sample
// Object { id: 1, height: 20 }

// Object.keys(sample)
// Array [ "id", "height" ]

// Object.keys(sample)[0]
// "id"

// sample["id"]
// 1

// Object.keys(sample)[1]
// "height"

// var sample = { height: 20}

// Object.keys(sample)[0]
// "height"

// sample["height"]
// 20

function findWhere(array, criteria){
    var key = Object.keys(criteria)[0];
    // console.log(key); // height
    return array.find(function(element){
        return element[key] === criteria[key];
    });
}

// { height: 25 } が検索条件
findWhere(ladders, { height: 25 });

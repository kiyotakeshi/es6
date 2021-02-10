// ----------------
var computers = [
    { name: 'Apple', ram: 24 },
    { name: 'Compaq', ram: 4 },
    { name: 'Acer', ram: 32 }
];

// 16GB 以上必要な場合
// 全てが満たしているか、あるいは一部でも満たしているものがあるかを見つけてきたい

var allComputersCanRun = true;

var someComputersCanRun = false;

// for はなんでもできるが意味が少しでも複雑になると意味がわかりにくくなる
for(var i = 0; i < computers.length; i++){
    var computer = computers[i];

    // 小さいものがあれば、全て動かせるわけではなくなる
    if (computer.ram < 16) {
        allComputersCanRun = false;
    } else {
        // どれかは 16GB を上まっている
        someComputersCanRun = true;
    }
}

allComputersCanRun
someComputersCanRun

'--- every ---'
// every はすべてをみて論理積(and)をみる
// 直感的にわかる
var allComputersCanRun = computers.every(function(computer){
    return computer.ram >= 16;
});

allComputersCanRun


'--- some ---'
var someComputersCanRun = computers.some(function(computer){
    return computer.ram >= 16;
});

someComputersCanRun

// ----------------
var names = [
    'mike',
    'jackson',
    'kendrick'
];

names.every(function(name){
    return name.length >= 3;
});

names.every(function(name){
    return name.length >= 3;
});

// ----------------
// validatation で全ての入力フィールドをチェックする時に使える
function Field(value){
    this.value = value;
}

// prototype は username などのフィールドに対して新たにメソッドを呼べるようにする方法
Field.prototype.validate = function(){
    return this.validate.length > 0;
}

var username = new Field('my_username');
var password = new Field('my_password');

// フィールドの数が増えるとどんどん論理積が長くなってくる
// username.validate() &&  password.validate()
var fields = [
    username,
    password
];

// 直感的にわかりやすく書ける
var formIsValid = fields.every(function(field){
    return field.validate();
});

// if(formIsValid){
//     // サーバにリクエスト
// } else {
//     // エラーを表示
// }

// ----------------
var users = [
    { id: 21, hasSubmitted: true },
    { id: 62, hasSubmitted: false },
    { id: 4, hasSubmitted: true }
];

var hasSubmitted = users.every(function(user){
    return user.hasSubmitted === true
});

hasSumbitted

// ----------------
var requests = [
    { url: '/photos', status: 'complete' },
    { url: '/albums', status: 'pending' },
    { url: '/users', status: 'failed' }
];

var inProgress = requests.some(function(request){
    return request.status === 'pending'
});

inProgress

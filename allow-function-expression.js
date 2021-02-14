// 従来のかきかた
// const add = function(a, b){
//     return a + b;
// }

// アロー関数
// const add = (a,b) => {
//     return a + b;
// }
// 評価が1つだと、一行で書けるが、可読性を考えて使用する
const add = (a,b) => a + b;
add(1,2)

// ---------------------
// 従来のかきかた
// const double = function(number){
//     return 2 * number;
// }

// アロー関数
//const double = (number) => 2 * number;

// 引数が一つならさらに省略可能
const double = number => 2 * number;

double(8);

// ---------------------
const numbers = [1,2,3];

// numbers.map(function(number){
//     return 2 * number;
// })

// numbers.map((number) => {
//     return 2 * number;
// })

// numbers.map((number) => 2 * number);
numbers.map(number => 2 * number);

// ---------------------
const team = {
    members: ['Mike', 'Kendrick'],
    teamName: 'GOAT',

    // ES5 まで
    // // コールバック関数は別コンテキストで実行されているため、 this がそのまま使えない(team をさすことができない)
    // teamSummary: function(){
    //     let self = this;
    //     return this.members.map(function(member){
    //         return `${member} belongs ${self.teamName}`;
    //     //    return `${member} belongs ${this.teamName}`;
    //     //    }.bind(this));
    //     });
    // }

    // アロー関数が lexical this(どこにおくかによって this が変わる、構文的な this) を使用するため
    teamSummary: function(){
        return this.members.map((member) => {
            // this と team が同じ、感覚的に書ける
            return `${member} belongs ${this.teamName}`;
        })
    }
};

team.teamSummary();
// ---------------------
// 1,1,2,3,5,8
// const fibonacci = function(n) {
//     if (n < 3) return 1;
//     // n = 5
//     // fibonacci(4) + fibonacci(3)
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

const fibonacci = n => {
    if (n < 3) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

fibonacci(4)
// ---------------------
// allow-function の使い所に注意
// 以下のケースは allow-function を使わずにかくべき
const profile = {
    name: '太郎',
    getName: function(){
        return this.name
    }
};

// allow-function を使った場合
// this; // brewser の window object
// const profile = {
//     name: '太郎',
//     getName: () => {
//         return this.name; // <- この this は profile を指しているわけではない
//     }
// };

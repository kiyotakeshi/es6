var products = [
    { name: 'orange', type: 'fruts'},
    { name: 'tomato', type: 'vagetable'},
    { name: 'apple', type: 'fruts'},
    { name: 'leture', type: 'vagetable'}, 
];

// 元の配列は触らずに(mutate しない)、新しい入れ物を用意する
var filteredProducts = [];

for (var i = 0; i < products.length; i++) {
// filter しているというのがわかりにくい
    if(products[i].type === 'fruts') {
        filteredProducts.push(products[i]);
    }
}

// filteredProducts

// ------------
const filteredProducts2 = products.filter(function(product){
    // true を返すので return が必要
    return product.type === 'fruts';
});

filteredProducts2

// ------------
var products = [
    { name: 'orange', type: 'fruts', quantity: 0, price:1 },
    { name: 'tomato', type: 'vagetable', quantity: 10, price: 3},
    { name: 'apple', type: 'fruts', quantity: 15, price: 5},
    { name: 'leture', type: 'vagetable', quantity: 30, price: 10}, 
];

// 種類が野菜、量が0以上、値段が10以下
products.filter(function(product){
// 条件を並べてある配列から自分が興味あるデータのみに絞れる
return product.type === 'vagetable'
&& product.quantity > 0
&& product.price < 10
});

// ------------
// 関連するデータだけに絞り込みたい
var post = { id:2, title: 'first post'};

var comments = [
    { postId: 2, content: 'good'},
    { postId: 1, content: 'thanks'},
    { postId: 2, content: 'keep on'}
];

// ある post に関連したコメントを取ってくる関数
// 対象となる post, 抜き取りたいコメント群
function commentsForPost(post, comments){
    return comments.filter(function(comment){
        return comment.postId === post.id;
    });
}

commentsForPost(post, comments);

// ------------
var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers;

filteredNumbers = numbers.filter(function (number){
    return number > 50;
})

filteredNumbers

// ------------
var users = [
    { id: 1, admin: true },  
    { id: 2, admin: false },
    { id: 3, admin: false },
    { id: 4, admin: false },
    { id: 5, admin: true },
];

var filteredUsers;

filteredUsers = users.filter(function (user){
    return user.admin === true;
})

filteredUsers

// ------------
var numbers = [10, 20, 30];

// filter と逆の挙動をする、 true を返した場合は結果の配列に含まないようにする
function reject(array, iteratorFunction){
    return array.filter(function (element){
        return !iteratorFunction(element);
    });
}

// 15 以下の要素のみヒット
var lessThanFifteen = reject(numbers, function(number){
    return number > 15;
});

lessThanFifteen
var colors = ['red', 'blue', 'green'];

// これを書かないようにする(一行に詰められている情報量が多いため)
// コードは読む時間の方が長いため、なるべくわかりやすく書く
for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// function は配列の中の一つ一つに対して実行される関数
// forEach に渡している function はコールバック関数
// 配列の処理が順にコールバック関数に渡されていく
// for 文を使うよりもロジックが少ないためわかりやすい
colors.forEach(function(color){
  console.log(color);
});

// ------------
var numbers = [1,2,3,4]
var sum = 0;

function adder(number){
  sum += number;
}

// 配列の要素を合計に足す
// 匿名関数を使用する場合
numbers.forEach(function(number){
	sum += number;
});
sum;

// 関数の定義を渡しているだけなので、 adder() として実行しない
numbers.forEach(adder);
sum;

// ------------
// 複数選択したものに対して操作したい時
// emails.forEach(function(email){
//   deleteEmail(email);
// });

// ------------
var images = [
    { height: 10, width: 30 },
    { height: 20, width: 90 },
    { height: 54, width: 32 }
  ];
  var areas = [];
  
  images.forEach(function(image){
      areas.push(image.height * image.width);
  });
  
  console.log(areas);
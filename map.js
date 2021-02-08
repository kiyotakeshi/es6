var numbers = [1,2,3]

// すでにあるデータを変える(mutate)しないように定義
var doubledNumbers = [];

for (var i = 0; i < numbers.length; i++ ){
  doubledNumbers.push(numbers[i] * 2);
}

doubledNumbers;

var doubled = numbers.map(function(number) {
  // コールバック関数の返り値が、「新しい配列」に戻されている
  // number * 2; // 忘れると [null,null,null]
	return number * 2;
});

doubled;
// ------------
var cars = [
  {type: 'cheep car', price: 'cheep'},
  {type: 'expensive car', price: 'expensive'}
];

// オブジェクトからある部分を抜き取ることもできる
// cars に対して car がひとつずつ渡るようにするため、引数に car
var prices = cars.map(function(car) {
  return car.price;
});

prices

// ------------
var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

var heights = images.map(function(image){
    return image.height;
})

heights

// ------------
var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds = trips.map(function(trip){
    return trip.distance / trip.time;
})

speeds

// ------------
function pluck(array, property){
  // 与えられた配列に対して map をかける
  return array.map(function(element){
    // 対象のオブジェクト(element)の property を抜き取る
    return element[property];
  });
}

var colorObjects = [{ color: '赤' }, { color: '青' }, { color: '黄色' }];

var colorNames = pluck(colorObjects, 'color');

colorNames

// アロー関数を使う場合
function pluck2(array, property){
  return array.map(element => element[property]);
}
pluck2(colorObjects, 'color');




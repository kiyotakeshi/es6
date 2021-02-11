// ---------------------
var numbers = [ 10, 20, 30];

var sum = 0;

for(var i = 0; i < numbers.length; i++){
    sum += numbers[i];
}

'-------'
// コールバック関数に渡すのは、 初期値(0)と配列の値
// 0 + number の結果が sum として次に渡される
numbers.reduce(function(sum, number){
    return sum + number;
}, 0);

// ---------------------
var primaryColors = [
    { color: 'red' },
    { color: 'yellow' },
    { color: 'blue' }
];

// 空の配列 [] がコールバック関数にわたる
// prev(previous), acc(accumulator) を使うことが多い
primaryColors.reduce(function(prev, primaryColor){
    // [] を mutate しているが、 prev はこのスコープでしか使えないので問題ない
    prev.push(primaryColor.color)
    return prev;
},[]);

// ---------------------
// カッコの数が左右均衡か確かめる
// '((()))' -> ( を +1, ) は -1 で合計が0であれば均衡が取れている

function balancedParens(string){
    // ["(",")"] に分かれる
    // 0 であれば、 均衡がとれており True
    return !string.split('').reduce(function(prev, char){
        // ) が先に来た場合は -1,False を返す
        if (prev < 0) {
            return prev;
        }
        if (char === '(') {
            return prev + 1;
        }
        if (char === ')') {
            return prev -1;
        }
    },0);
}

balancedParens('()');

// ---------------------
var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance = trips.reduce(function(sum, trip){
    return sum + trip.distance;   
},0);

// ---------------------
var desks = [
    { type: 'sitting' },
    { type: 'standing' },
    { type: 'sitting' },
    { type: 'sitting' },
    { type: 'standing' }
];

var deskTypes = desks.reduce(function(prev, desk) {
    if(desk.type === 'sitting'){
        prev.sitting ++
    }
    if(desk.type === 'standing'){
        prev.standing ++
    }
    return prev;
}, { sitting: 0, standing: 0 });

deskTypes

// ---------------------
var numbers = [1, 1, 2, 3, 4, 4];

// function unique(array){
//     return array.reduce(function(result, array){
//         if(result.indexOf(array) == -1){
//             result.push(array);
//     }
//         return result;
//     },[]);
// }

function unique(array){
    return array.reduce(function(acc, element){
        var existingElement = acc.find(function(target){
            return target === element;
        });
        // 見つからなかったら push する
        if(!existingElement){
            acc.push(element);
        }
        return acc;
    },[]);
}

unique(numbers)
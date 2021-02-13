// var を const か let で置き換える
// const は定数、変わらないもの
// let は変わるかもしれないもの
// var color = 'red';

// var name = 'Taro';
// var title = 'engineer';
// var hourlySalary = 3000;

// 変わる可能性があるかを考えて宣言時に意識する
const name = 'Taro';
let title = 'engineer';

title = 'lead engineer';

let hourlySalary = 3000;

hourlySalary = 4000;

// ----------------------
// コードを読む時に一目でどれだけ意図が汲み取れるかが大事
// 後から触る人が「この変数の値を変えてもいいのかがわかること」が大事

// for 文かつ var で意図がわかりづらいコード
// function count(targetString){
//     var characters = ['a', 'e', 'i', 'o', 'u'];
//     var number = 0;

//     for(var i = 0; i < targetString.length; i++){
//         if (characters.includes(targetString[i])) {
//             number ++;
//         }
//     }
//     return number;
// }

function count(targetString){

    // immutable に配列を操作する(push を使わない)という意思表示
    const characters = ['a', 'e', 'i', 'o', 'u'];

    // 変わる可能性のある値
    let number = 0;

    targetString.split('').forEach(function(target){
        if (characters.includes(target)) {
            number ++;
        }
    })
    return number;
}

count('asbgeidiaddeeee');

// ----------------------

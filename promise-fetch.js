// -------------------
// sleep のようにその場で留めておくという処理はなく、
// ひとつずつ、一瞬で (ノンブロッキングで) 実行されてしまう
// const url = 'https://www.json-example.com';
// data = getRequest(url); // サーバからいつ結果をもらえるかはわからない
// console.log(data); // 結果が帰ってくる前に実行されて、何も入っていない

// => 長時間かかるものと付き合うために、 promise がある
// レスポンスがきてから(= then )、 console.log(data) する
// Promise -> resolved -> then
// Promise -> rejected -> catch

// -------------------
promise = new Promise((resolve, reject) => {
    // resolve();
    reject();
});

promise
    .then(() => console.log('finish'))
    .then(() => console.log('finish2'))
    .catch(() => console.log('error'))

// -------------------
promise2 = new Promise((resolve, reject) => {
    // 3秒待つ
    setTimeout(() => {
        // resolve();
        reject();
    }, 3000)
});

promise2
    .then(() => console.log('finish'))
    .then(() => console.log('finish2'))
    .catch(() => console.log('error'))

// -------------------
url = 'https://jsonplaceholder.typicode.com/posts/';

fetch(url)
    .then( response => response.json())
    .then( data => console.log(data));

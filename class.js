// ----------
// ES6 で class を使うと、裏側では prototype chain がつかわれている

// ----------
// ES5
function Car(options){
    this.title = options.title;
}

// メソッドを追加したい
Car.prototype.drive = function(){
    return 'run';
}

var car = new Car({title: '4WD'});

// car;
// car.drive();

// 継承ぽいものを prototype chain でつくる
function Toyota(options){
    Car.call(this, options);
    this.color = options.color;
}

// Car の prototype をいれて、 constructor に Toyota を入れる必要あり
Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = function(){
    return 'bommmm';
}

const toyota = new Toyota({color: 'red', title:'Prius'});
toyota; // {"title":"Prius","color":"red"}
toyota.drive(); // run
toyota.honk(); // bommm

// ----------
// ES6
// 直感的にかける
class Car {

    // constructor(options){
    //     this.title = options.title;
    // }

    // 分割代入を使う
    constructor({title}){
        this.title = title;
    }

    drive(){
        return 'run';
    }
}

// const car = new Car({ title: 'Prius'});
// car;
// car.drive();

// 継承させる
class Toyota extends Car {

    // constructor で分割代入するのはあまりわかりやすくない 
    constructor(options){
        super(options); // 継承元の constructor を呼ぶ
        this.color = options.color;
    }

    honk(){
        return 'bommm';
    }
}

const toyota = new Toyota({ color: 'red',title: 'Prius'});
toyota;
toyota.honk();
toyota.drive();

// ----------
// React が用意している class を継承して書けるようになった
// class MyComponent extends Comment {
// 
// }

// ----------
class Monster{
    constructor(options){
        this.health = 100;
        this.name = options.name;
    }
}

const monster = new Monster({name: 'goblin'});
monster

class Snake extends Monster {
    constructor(options){
        super(options);
    }
    bite(targetSnake){
        targetSnake.health -= 10;
    }
}

const snake = new Snake({ health: 100, name: 'snake'});
const snake2 = new Snake({ health: 100, name: 'snake2'});

snake.bite(snake2);
snake2


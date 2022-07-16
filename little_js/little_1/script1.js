let a = {};
let b = new Object;

console.log('a', a);
console.log('b', b)

function createHero(name = '', age = 5, pet = 'Cat') {
    return {name, age, pet}
}

let hero1 = createHero('Superman', 40, 'Dog')
let hero2 = createHero('Batman', 35)
let hero3 = createHero()

console.log('hero1', hero1)
console.log('hero2', hero2)
console.log('hero3', hero3)

let obj = {
    pets: [
        {name: 'Cat'},
        {name: 'Dog'},
    ],
    name: '',
    params: {
        health: 100,
    }
}

class Hero {
    name = '';
    age = 0;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getBirthYear() {
        let date = new Date();
        let year = date.getFullYear();

        return year - this.age;
    }
    sayHello() {
        return `Hello, my name is ${this.name}!`
    }
    static counter() {
        return 5;
    }

}


let _pet = '';

class MarvelHero extends Hero {
    pet = '';
    constructor(name, age, pet) {
        super(name, age);

        this.pet = pet;
    }
    get petName() {
        return _pet
    }
    set petName(pet) {
        _pet = pet
    }
}

class DCHero extends Hero {

}

let hero4 = new Hero();

console.log('hero4', hero4)

let batman = new DCHero('Batman', 40);
let cap = new MarvelHero('Captain', 40, 'shield');

console.log('bat', batman)
console.log('cap', cap)

let capsYear = cap.getBirthYear()

console.log({capsYear})

console.log('cap says', cap.sayHello())

console.log('static', Hero.counter())

console.log('cap.petName', cap.petName);
cap.petName = 'zzz';
console.log('cap.petName', cap.petName);

function createHero1() {
    let _age = 0;

    class Hero {
        get age() {
            return _age
        }
        set age(age) {
            if (age < 10) {
                _age = age;
            }
        }
    }

    return new Hero()
}

let h = createHero1();

console.log('h', h);

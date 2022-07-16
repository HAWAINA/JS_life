// let vasya = {name: 'Vasya', age: 30, pet: 'Sobaka'};
// let petya = {name: 'Petya', age: 20, pet: 'Koshka'};
//
// let heroes = [vasya, petya];

let heroes = [
    {name: 'Vasya', age: 10, pet: 'Sobaka'},
    {name: 'Petya', age: 20, pet: 'Koshka'}
];

function getPetName(index) {
    return getBirthYear
}

function getPetByHeroName(name) {
    for (let hero of heroes) {
        if (hero.name === name) {
            return hero.pet;
        }
    }
}

function getBirthYear(index) {
    let age = heroes[index].age;
    let date = new Date();
    let year = date.getFullYear();

    return year - age;
}

function getHeroByName(name) {
    for (let hero of heroes) {
        if (hero.name === name) {
            return hero;
        }
    }
}

function getBirthYearByName(name) {
    let hero = getHeroByName(name);
    let age = hero.age;
    let date = new Date();
    let year = date.getFullYear();

    return year - age;
}


function findOlder(a, b) {
    let ageA = heroes[a].age;
    let ageB = heroes[b].age;

    if ( ageA > ageB ) {
        return heroes[a].name;
    } else if (ageB > ageA) {
        return heroes[b].name;
    } else {
        return '';
    }
}

function findOlder2(a, b) {
    let ageA = heroes[a].age;
    let ageB = heroes[b].age;

    return (ageA > ageB) ? (heroes[a].name) : ((ageB > ageA) ? (heroes[b].name) : '')
}

console.log('1', getPetName(1));
console.log('2', getPetByHeroName('Vasya'))
console.log('3', getBirthYear(0))
console.log('4', findOlder(0, 1))
console.log('5', findOlder2(1, 0))
console.log(6, getBirthYearByName('Petya'))
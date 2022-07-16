let a = {name: 'vasya', age: '20'};
// let name = a.name, age = a.name;
let {name, age} = a;

console.log('name', name)
console.log('age', age)

let b = [3,4,5]
let [v0, v1, v2] = b;

console.log('v', v0, v1, v2);

let c = {
    name1: 'asdf',
    sub: {
        key: 234,
        arr: [
            5,6,7, {blah: 1}
        ]
    }
}

let {
    name1,
    sub: {
        key,
        arr: [e0, ...restArr]
    }
} = c;

console.log('d', name1, key)
console.log('e0', e0, restArr)

function getName({name, ...restProps}, ...rest) {
    console.log('restProps', restProps)
    console.log('rest', rest)
    return name;
}

let vasya = {name: 'vasya', age: 5, mom: {}}
console.log('getName', getName(vasya, 'asdf'))

// WRONG:
// getName(null)

let petya = {...vasya, asdf: 'zzz'};

console.log('petya', petya)

let arr1 = [1,2,3]
let arr2 = [...arr1, 4]
let arr3 = [...arr1, ...arr2, 5]

console.log(arr1, arr2, arr3)

function add(a, b) {
    return a + b
}

let data = [5, 6];
console.log('add', add(data[0], data[1]))
console.log('add splat', add(...data))
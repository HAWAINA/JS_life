let aud = document.querySelector('#aud');
console.log(aud);

let aud1 = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3')
console.log(aud1);

/*document.addEventListener('click', () => {
    aud1.play()

})*/

let vid = document.querySelector('#vid')
let btn = document.querySelector('button')
btn.addEventListener('click', () => {
    if (vid.paused) {
        vid.play()
    } else {
        vid.pause()
    }
})

document.getElementById('mute').addEventListener('click', () => {
    vid.muted = !vid.muted
})

let arr = [4, 5, 6, 6, 7, 7, 7]
let set = new Set(arr);
let uniqArr = Array.from(set);
//
// console.log(arr)
// console.log(set)
//
// for (let v of set) {
//     console.log(v)
//     uniqArr.push(v)
// }
console.log(uniqArr)


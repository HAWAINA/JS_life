var canvas = document.getElementById("canvas");
console.log(canvas)
var ctx = canvas.getContext("2d");
console.log(ctx)

ctx.fillStyle = 'yellow'
ctx.fillRect( 10, 20, 30, 40)

ctx.fillStyle = 'red'
ctx.fillRect( 50, 20, 30, 40)

ctx.fillStyle = 'blue'

ctx.beginPath();
ctx.arc(60, 80, 10, 0, Math.PI * 2, false);
ctx.closePath();
ctx.fill()

const baseX = 100;
const baseY = 100;


// sin
ctx.beginPath();
ctx.strokeStyle = 'green'
ctx.moveTo(0, baseY)

for (let i = 0; i < 200; i++) {
    // console.log(baseY + Math.sin(i / 5) * 50)
    ctx.lineTo(i, baseY + Math.sin(i / 5) * 50)
}
ctx.stroke()

// cos


ctx.beginPath();
ctx.strokeStyle = 'magenta'
ctx.moveTo(0, baseY)

for (let i = 0; i < 200; i++) {
    // console.log(baseY + Math.sin(i / 5) * 50)
    ctx.lineTo(i, baseY + Math.cos(i / 5) * 50)
}
ctx.stroke()

//


ctx.beginPath();
ctx.strokeStyle = 'blue'
ctx.moveTo(baseX, baseY + 50)

for (let i = 0; i < 200; i++) {
    // console.log(baseY + Math.sin(i / 5) * 50)
    ctx.lineTo(baseX + Math.sin(i / 5) * 100, baseY + Math.cos(i / 5) * 50)
}
ctx.stroke()

let blobUrl = canvas.toDataURL("image/png");
console.log(blobUrl);

let img = document.createElement('img');
img.setAttribute('src', blobUrl)
document.querySelector('#root1').append(img);


function asdf() {

}

// fetch().then(() => {}).catch()

async function a() {
    let loading = document.getElementById('loading')
    loading.style.display = 'block';


    try {
        await new Promise((resolve, reject) => {
            let i = 0;
            let int = setInterval(() => {
                i++;
                if (i > 100) {
                    clearInterval(int)
                    resolve()
                }

                loading.setAttribute('value', i)
            }, 50)
        })

        console.log('zzz')


        let res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        console.log(res)
        let json = await res.json();
        console.log(json)
        return json;

    } catch (e) {
        console.log(e);
    } finally {
        console.log('after')
        loading.style.display = 'none';

    }

}

a();
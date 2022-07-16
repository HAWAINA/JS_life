async function main() {
    let txt = await fetch('http://localhost:3000/time')
        .then(res => res.text());

    // console.log('txt', txt);
    document.write(txt + '<br/>')
}

setInterval(main, 1000)

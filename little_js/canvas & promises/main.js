function main() {
    let root = document.querySelector('#root')

    let redArrow = new Arrow(root, 'red')
    let greenArrow = new GreenArrow(root, 'green', 80);
    let yellowArrow = new YellowArrow(root, 'yellow', 60);
    redArrow.start()
    greenArrow.start()
    yellowArrow.start()

    let face = new Face(root, 80);

    ///

    let root2 = document.querySelector('#root2')
    let root3 = document.querySelector('#root3')
    let el2 = document.querySelector('#el2')

    el2.addEventListener('click', () => {
        root3.prepend(el2)
    })
}

main();
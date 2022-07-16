function main() {
    let root = document.querySelector('#root')

    let arrow = new Arrow(root)

    root.addEventListener('click', () => {
        if (!arrow.interval) {
            arrow.start()
        } else {
            arrow.stop()
        }
    })

    let greenArrow = new GreenArrow(root);
    greenArrow.start()

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
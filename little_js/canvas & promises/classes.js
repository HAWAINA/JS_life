class Arrow {
    constructor(root, color, length = 100) {
        // let root = document.getElementById('root')
        // console.log(root)
        let el = document.createElement('div')
        // console.log(el)
        el.classList.add('arrow')
        root.append(el)


        // el.style.transform = 'rotate(1.1rad)'
        el.style.height = `${length}px`;
        el.style.borderColor = color;
        el.style.top = `${100 - length}px`;

        this.el = el;
        this.root = root;
    }

    start() {
        // setTimeout()
        // this.angle = parseFloat(this.el.style.transform.substr(7));

        // console.log(this.angle)
        this.interval = setInterval(this.update, 1000);
    }

    update = () => {
        let date = new Date();
        let sec = date.getSeconds();
        this.angle = Math.PI * 2 / 60 * sec

        this.updateAngle()
    }

    updateAngle() {
        this.el.style.transform = `rotate(${this.angle}rad)`
    }

    stop() {
        clearInterval(this.interval)
        this.interval = null;
    }
}

class GreenArrow extends Arrow {

    update = e => {
        let date = new Date();
        let sec = date.getMinutes();
        this.angle = Math.PI * 2 / 60 * sec

        this.updateAngle()
    }

}

class YellowArrow extends Arrow {
    update = e => {
        let date = new Date();
        let sec = date.getHours();
        this.angle = Math.PI * 2 / 12 * sec

        this.updateAngle()
    }
}


class Face {
    constructor(root, radius) {
        for (let i = 1; i <= 12; i++) {
            let angle = - Math.PI * 2 / 12 * i + Math.PI;

            let x = Math.sin(angle) * radius + 100
            let y = Math.cos(angle) * radius + 100

            let number = new ClockNumber(i, x, y);

            root.append(number.el)
        }
    }
}

class ClockNumber {
    constructor(i, x, y) {
        let el = document.createElement('span');
        el.className = 'clock-number';
        el.innerText = i;
        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
        console.log(el)
        this.el = el;
    }
}
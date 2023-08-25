function randColor(elem) {
    let background = document.querySelector('.wrapper'),
        element = document.querySelector('.button'),
        code_color = document.querySelector('.code-color'),
        r = Math.floor(Math.random() * (256)),
        g = Math.floor(Math.random() * (256)),
        b = Math.floor(Math.random() * (256)),
        color = '#' + r.toString(16) + g.toString(16) + b.toString(16);

    background.style.background = color;
    code_color.innerText = color;
}
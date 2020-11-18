function genNum() {
    return Math.floor(Math.random()*255)
}

function genColor() {
    const r = genNum();
    const g = genNum();
    const b = genNum();
    return `rgb(${r}, ${g}, ${b})`;
}

const team = ['Antonio', 'Claudia', 'Giulia', 'Oscar', 'Pierpaolo', 'Rosita', 'Vieri'];
const div = document.querySelector('div')

for (let member of team) {
    const player = document.createElement('section');
    const identity = document.createElement('section');
    const randColor = `${genColor()}`

    const img = document.createElement('img');
    img.src = `img/${member}.jpeg`;
    img.style.border =`3.5px solid ${randColor}`

    const name = document.createElement('h3');
    name.innerText=`${member}`;
    
    div.appendChild(player);
    player.appendChild(identity);
    identity.append(img, name);

    identity.classList.add('identity');
    player.classList.add('player');
    player.addEventListener('click',
        function win() {
            const graph = document.createElement('span');
            graph.style.backgroundColor = `${randColor}`;
            this.appendChild(graph);
        });
}
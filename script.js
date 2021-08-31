const heading = document.getElementById('text');
const workWith = heading.innerHTML.split('')

const newEl = document.createElement('h3');
newEl.className = 'text overline'
newEl.innerHTML = `
	${workWith.map(e=> `<span style="${youcansee()}">${e}</span>`).join('')}
`

const some = document.querySelector('.wrapper');
some.appendChild(newEl)


function youcansee () {
	return Math.random() < 0.5 ? 'visibility: hidden' : 'visibility: visible'
}

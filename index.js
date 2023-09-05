const main = document.querySelector('main');
console.log(main)

main.remove();

const newHeader = document.createElement('h1')

newHeader.id = 'victory'

newHeader.innerHTML = "<h1>Lyds is the champion</h1>"

const container = document.querySelector('.container');

for(let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.classList.toggle('row');
    container.appendChild(row);
}

const rows = document.querySelectorAll('.row');
rows.forEach(row => {
    for(let i = 0; i < 16; i++) {
        const column = document.createElement('div');
        column.classList.toggle('column');
        row.appendChild(column);
    }
})

const squares = document.querySelectorAll('.column');
squares.forEach(column => {
    column.addEventListener('mouseover', function() {
        column.classList.add('black');
    })
});


const dimension = document.querySelector('#button');
dimension.addEventListener('click', function() {
    const user = document.querySelector('#dimension-input');
    changeDimensions()
});
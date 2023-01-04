const dimension = 512;
const container = document.querySelector('.container');

function makeEtch(num) {
    const edge = dimension/num;
    for(let i = 0; i < num; i++) {
        const row = document.createElement('div');
        row.classList.toggle('row');
        container.appendChild(row);
    }
    
    const rows = document.querySelectorAll('.row');
    rows.forEach(row => {
        for(let i = 0; i < num; i++) {
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
        column.style.height = edge + 'px';
        column.style.width = edge + 'px';
    });
}



const clear = document.querySelector('.clear');
clear.addEventListener('click', function() {
    const squares = document.querySelectorAll('.column');
    squares.forEach(column => column.classList.remove('black'));
});

const size = document.querySelectorAll('.size');
size.forEach(sizes => {
    sizes.addEventListener('click', function() {
        changeSize(sizes.classList);
    })
});

function changeSize(classList) {
    let size = classList[classList.length-1];
    
    let child = container.lastElementChild;
    while(child) {
        container.removeChild(child);
        child = container.lastElementChild;
    }

    if(size == 'small') {
        makeEtch(16);
    } else if(size == 'medium') {
        makeEtch(32);
    } else {
        makeEtch(64);
    }
}

makeEtch(16);
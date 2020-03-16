
const headerMenu = document.getElementById('menu');

// header links 
headerMenu.addEventListener('click', (event) => {
    headerMenu.querySelectorAll('a').forEach ((elem) => { elem.classList.remove('active') });
    event.target.classList.add('active');
});

//slider 

let items = document.querySelectorAll('.slider__item');
let currentItem = 0;
let isEnabled = true;

function chengecurrentItem (n) {
    currentItem = (n + items.length) % items.length;
}; 

function hideitem (direction) {
    isEnabled = false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener('animationend', function(){
        this.classList.remove('active', direction);
    })
}

function showitem (direction) {
    items[currentItem].classList.add('next', direction);
    items[currentItem].addEventListener('animationend', function(){
    this.classList.remove('next', direction);
    this.classList.add('active');
    isEnabled = true;
    })
}

function prievItem (n) {
    hideitem('to-right');
    chengecurrentItem(n-1);
    showitem('from-left');
}

function nextItem (n) {
    hideitem('to-left');
    chengecurrentItem(n+1);
    showitem('from-right');
}

document.querySelector('.btn__arrow.priew-arrow').addEventListener('click', function() {
    if(isEnabled) {
        prievItem(currentItem);
    }
});

document.querySelector('.btn__arrow.next-arrow').addEventListener('click', function() {
    if(isEnabled) {
        nextItem(currentItem);
    }
});

//black-display

let vertialBtn = document.querySelector('.black-display__ver-btn');
let horizontalBtn = document.querySelector('.black-display__hor-btn');


vertialBtn.addEventListener('click', (event) => {
    document.querySelector('.black-display__ver-display').classList.toggle('active');
})

horizontalBtn.addEventListener('click', (event) => {
    document.querySelector('.black-display__hor-display').classList.toggle('active');
})









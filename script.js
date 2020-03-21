//header 

document.addEventListener ('scroll', onscroll);


function onscroll (event){

    const links = document.querySelectorAll('#menu a');
    const curPosition = window.scrollY;
    const blocks = document.querySelectorAll('.block');

    blocks.forEach((item) => {
        if(item.offsetTop <= curPosition && (item.offsetTop + item.offsetHeight) > curPosition) {
            links.forEach((a) => {
                a.classList.remove('active');
                if (item.getAttribute('id') === a.getAttribute('href').substring(1)) {
                    a.classList.add('active');
                }
            })
        }
    })
}


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

//portfolio 


const portfolioMenu = document.getElementById('portf-menu');

portfolioMenu.addEventListener('click', (event) => {
    portfolioMenu.querySelectorAll('button').forEach((item) => {
        item.classList.remove('active');
    })
    event.target.classList.add('active');
    
})

const portfolioWorks = document.getElementById('portf-works');

portfolioWorks.addEventListener('click', (event) => {
    portfolioWorks.querySelectorAll('img').forEach((item) => {
        item.classList.remove('active');
    })
    event.target.classList.add('active');
    
})



/* arr.unshift(arr.pop()); */







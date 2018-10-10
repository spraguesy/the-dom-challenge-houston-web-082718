let likes = {};
let running = true;


let pauseButton = document.querySelector('button#pause');
let element = document.querySelector('form#comment-form');
let plusButton = document.querySelector("button#plus");
let minusButton = document.querySelector('button#minus');
let favoriteButton = document.querySelector('button#favorite');


function submitComment(event) {
    event.preventDefault();
    if (running) {
        myEvent = event.target.comment.value;
        addComment(myEvent);
    }
    this.reset();
};

function noComments(event) {
    event.preventDefault();
    this.reset();
}

pauseButton.addEventListener("click", function () {
    if (running) {
        event.preventDefault();
        plusButton.removeEventListener("click", addOne);
        minusButton.removeEventListener("click", minusOne);
        favoriteButton.removeEventListener('click', addFavorite);
        element.removeEventListener('submit', submitComment);
        document.getElementById('submit').disabled = true;
        this.innerText = 'Resume';
    } else {
        event.preventDefault();
        plusButton.addEventListener("click", addOne);
        minusButton.addEventListener("click", minusOne);
        favoriteButton.addEventListener('click', addFavorite);
        element.addEventListener("submit", submitComment);
        document.getElementById('submit').disabled = false;
        this.innerText = 'Pause';
    }
    running ? running = false : running = true;
})

plusButton.addEventListener("click", addOne);
minusButton.addEventListener("click", minusOne);
favoriteButton.addEventListener('click', addFavorite);
element.addEventListener("submit", submitComment);



setInterval(addOne, 1000);



function addOne() {
    if (running) {
        let count = parseInt(document.querySelector('h1#counter').innerText);
        let counter = document.querySelector('h1#counter');
        count++;
        counter.innerText = count;
    }
}


function minusOne() {
    let count = parseInt(document.querySelector('h1#counter').innerText);
    let counter = document.querySelector('h1#counter');
    count--;
    counter.innerText = count;
}


function addFavorite() {
    counter = document.querySelector('h1#counter').innerText;
    list = document.querySelector('ul.likes');
    if (likes[parseInt(counter)]) {
        likes[parseInt(counter)]++;

    } else {
        likes[parseInt(counter)] = 1;
    }
    listItems = Object.keys(likes).map((key) => {
        return `<li>You like ${key} ${likes[key]} times</li>`;
    }).join('');
    list.innerHTML = listItems;
};

function addComment(comment) {
    div = document.querySelector('.comments#list');
    div.innerHTML += `<p>${comment}</p>`;
};
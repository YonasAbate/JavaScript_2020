// SMS App
let textAreaEL = document.querySelector('#text-area');
let carCountEL = document.querySelector('#char-count');
textAreaEL.addEventListener('keyup', function() {
    let textLength =  textAreaEL.value.length;
    carCountEL.innerText = textLength;
});

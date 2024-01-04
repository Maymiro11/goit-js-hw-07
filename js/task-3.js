const userName = document.querySelector('#name-input');
const userSpan = document.querySelector('#name-output');

userName.addEventListener("input",
 function() {
    let inputVal = this.value.trim();
    inputVal = inputVal.length === 0 ? 'Anonymous' : inputVal;
    userSpan.innerHTML = inputVal;
});

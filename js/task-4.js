let registerForm = document.querySelector('.login-form');

registerForm.addEventListener("submit", 
function(event) {
    event.preventDefault();
    let inputData = [
        this.elements.email.value.trim(),
        this.elements.password.value.trim()
    ];
    console.log(this.elements);
    for(let elem in inputData) {
        if (inputData[elem].length === 0) {
            alert('All form fields must be filled in');
            return;
    };
    }
    console.log(inputData);
    this.reset();
}
);

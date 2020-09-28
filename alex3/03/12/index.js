function inputChecker(input) {
    const whiteList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'ArrowLeft', 'ArrowRight', 'F5', 'Delete', 'Backspace']
    return whiteList.includes(input);
}

function isLengthFour(input) {
    return (input + 1) % 5 === 0;
}
const inputField = document.querySelector("#in");
inputField.addEventListener("keydown", function(e) {
    if (inputChecker(e.key)) {
        if (isLengthFour(inputField.value.length)) {
            inputField.value = inputField.value.concat(" ");
        }
    } else {
        e.preventDefault();
    }
})
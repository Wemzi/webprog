//document.querySelector("#text").addEventListener("keydown", inputChecker);

document.addEventListener('keydown', onKeyDown);

/*function inputChecker(e) {
    const whiteList = ['0', '2', '4', '6', '8', 'ArrowLeft', 'ArrowRight', 'F5', 'Delete', 'Backspace']
    if (!whiteList.includes(e.key)) {
        e.preventDefault();
    }

}*/

function onKeyDown(e) {
    if (!e.target.matches('input.text')) {
        return;
    }
    const whiteList = ['0', '2', '4', '6', '8', 'ArrowLeft', 'ArrowRight', 'F5', 'Delete', 'Backspace']
    if (!whiteList.includes(e.key)) {
        e.preventDefault();
    }

}
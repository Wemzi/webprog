const span = document.querySelector("#key");


document.addEventListener("keydown", function(e) {
    if (e.ctrlKey) {
        span.innerHTML = `Ctrl + ${e.key}`
    } else if (e.shiftKey) {
        span.innerHTML = `Shift + ${e.key}`
    } else if (e.altKey) {
        span.innerHTML = `Alt + ${e.key}`
    } else {
        span.innerHTML = `${e.key}`
    }
});
for (const elements of document.querySelectorAll(".display-value")) {
    const tempSpan = document.createElement("span");
    tempSpan.innerHTML = elements.value;
    elements.insertAdjacentElement("afterend", tempSpan);
};

document.addEventListener("input", function(e) {
    const span = e.target.nextElementSibling;
    span.innerHTML = e.target.value;
});
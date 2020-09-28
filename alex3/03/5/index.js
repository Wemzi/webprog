document.addEventListener("click", preventLink);

function preventLink(e) {
    if (e.target.matches("a")) {
        if (!e.target.href.includes("elte.hu")) {
            e.preventDefault();
            console.log(e.target)
        }
    }
}
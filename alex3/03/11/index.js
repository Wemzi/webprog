document.querySelector(".faq").addEventListener("click", questions);

function questions(e) {
    if (e.target.matches("h2")) {
        if (e.target.nextElementSibling.style.display === "none") {
            e.target.nextElementSibling.style.display = "block";
        } else {
            e.target.nextElementSibling.style.display = "none";
        }
    }
}
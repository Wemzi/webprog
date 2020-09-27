
const kerdeszona = document.getElementsByClassName("faq");


kerdeszona[1].addEventListener('click', onClickFunc);
function onClickFunc(e)
{
    let para = e.find_next_sibling('p');
    para.style.visibility = "hidden";
}


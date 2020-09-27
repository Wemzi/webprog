
  document.addEventListener("click", nemElte)
  function nemElte(e)
  {
      if(e.target.matches("a"))
        {
        if(!e.target.href.includes("elte.hu"))
        {
            e.preventDefault();
            console.log(e.target)
        }
      }
  }
  
<div>
  <button id="b1">1</button>
  <button id="b0">0</button>
</div>
<button id="br">reset</button>
<output></output>

<script>
  const button1 = document.querySelector("#b1");
  const button0 = document.querySelector("#b0");
  const buttonR = document.querySelector("#br");
  const output = document.querySelector("output");

  async function handleNumberClick(event) {
    const number = event.target.innerText;

    const result = await fetch(`ajax.php?number=${number}`);
    const o = await result.json();
    output.innerHTML = o.bin + " : " + o.dec;
  }
  button1.addEventListener("click", handleNumberClick);
  button0.addEventListener("click", handleNumberClick);

  async function handleResetClick() {
    const result = await fetch(`ajax.php?reset=1`);
    const o = await result.json();
    output.innerHTML = o.bin + " : " + o.dec;
  }
  buttonR.addEventListener("click", handleResetClick);
</script>
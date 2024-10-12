const input = document.querySelector(`#name-input`);
const output = document.querySelector(`#name-output`);
input.addEventListener(`input`, (event) => {
  const noSpace = event.target.value.trim();
  output.textContent = noSpace.length > 0 ? noSpace : 'Anonymous';
});

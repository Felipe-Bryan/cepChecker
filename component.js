function inputAdd(number) {
  return `
<div class="input-group mb-2 inputAdd">
    <input
    type="text"
    class="form-control"
    placeholder="${number}"
    aria-label="Nome"
    aria-describedby="basic-addon1" />
    <input
    type="number"
    class="form-control"
    placeholder="Preço"
    aria-label="Preço"
    min="0"
    aria-describedby="basic-addon1" />
</div>`;
}

const addBtn = document.getElementById('addIpt');

addBtn.addEventListener('click', () => {
  const spot = document.getElementById('additionalItems');
  const inputs = document.querySelectorAll('.inputAdd');

  spot.innerHTML += inputAdd(inputs.length);
});

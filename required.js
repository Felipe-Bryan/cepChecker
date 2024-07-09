function requiredOption(number) {
  return `
<div id="requiredItem${number}">
<input
type="text"
id="requiredOption${number}"
class="form-control mb-1 requiredOption"
placeholder="Nome"
aria-label="Nome"
aria-describedby="basic-addon1" />

<div id="requiredItems${number}">
    <div class="input-group mb-1">
    <input
        type="text"
        class="form-control requiredItem${number}"
        placeholder="Nome"
        aria-label="Nome"
        aria-describedby="basic-addon1" />
    <input
        type="number"
        class="form-control requiredItem${number}"
        placeholder="Preço"
        aria-label="Preço"
        min="0"
        aria-describedby="basic-addon1" />
    </div>

<div class="input-group mb-1">
    <input
    type="text"
    class="form-control requiredItem${number}"
    placeholder="Nome"
    aria-label="Nome"
    aria-describedby="basic-addon1" />
    <input
    type="number"
    class="form-control requiredItem${number}"
    placeholder="Preço"
    aria-label="Preço"
    min="0"
    aria-describedby="basic-addon1" />
</div>
</div>

<div class="d-flex justify-content-end">
<p class="m-0 p-0 mb-1 text-success" id="addReq${number}">
    <i class="bi bi-plus-circle text-success"></i> Adicionar Opção
</p>
</div>
</div>`;
}

function requiredItem(number) {
  return `
<div class="input-group mb-1">
<input
    type="text"
    class="form-control requiredItem${number}"
    placeholder="Nome"
    aria-label="Nome"
    aria-describedby="basic-addon1" />
<input
    type="number"
    class="form-control requiredItem${number}"
    placeholder="Preço"
    aria-label="Preço"
    min="0"
    aria-describedby="basic-addon1" />
</div>`;
}

const reqBtn = document.getElementById('reqIpt');

reqBtn.addEventListener('click', () => {
  const spot = document.getElementById('requiredOptions');
  const requiredOptions = document.querySelectorAll('.requiredOption');

  console.log(requiredOptions.length);

  spot.innerHTML += requiredOption(requiredOptions.length);

  const addItemBtn = document.getElementById(`addReq${requiredOptions.length}`);

  addItemBtn.addEventListener('click', () => {
    const itemsSpot = document.getElementById(`requiredItems${requiredOptions.length}`);

    itemsSpot.innerHTML += requiredItem(requiredOptions.length);
  });
});

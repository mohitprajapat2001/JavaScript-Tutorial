function createtodo() {
    let key = document.getElementById('todotitle').value;
    let value = document.getElementById('tododescription').value;
    let toast = `<div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <strong class="mr-auto">${key}</strong>
      <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="toast-body">
      ${value}
    </div>
  </div>`;
  document.getElementById('mytodos').innerHTML += toast
}
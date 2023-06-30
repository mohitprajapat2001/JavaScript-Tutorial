window.addEventListener('DOMContentLoaded', () => {
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i)
    let value = localStorage.getItem(key)
    let toast = `<div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <strong class="mr-auto">${key}</strong>
      <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close" onclick="todoremove(this)">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="toast-body">
      ${value}
    </div>
  </div>`;
    document.getElementById('mytodos').innerHTML += toast;
  }
})


function createtodo() {
  let key = document.getElementById('todotitle').value;
  let value = document.getElementById('tododescription').value;
  if (key != "" && value != "") {
    let toast = `<div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <strong class="mr-auto">${key}</strong>
      <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close" onclick="todoremove(this)">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="toast-body">
      ${value}
    </div>
  </div>`;
    document.getElementById('mytodos').innerHTML += toast;
    localStorage.setItem(key, value)
  }
  else {
    alert("Please Enter Todo Title and Description")
  }
}

function todoclear(){
  localStorage.clear();
  window.location.reload();
}

function todoremove(elem){
  let todoheader = elem.closest(".toast-header");
  let todokey = todoheader.querySelector('strong').innerHTML;
  localStorage.removeItem(todokey);
  window.location.reload();
}
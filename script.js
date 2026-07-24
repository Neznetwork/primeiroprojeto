let lista = document.getElementById("lista");
let textbox = document.getElementById("textbox");

function filterByName(event) {
  const searchTerm = event.target.value.toLowerCase();
  const listItems = document.querySelectorAll("#lista li");

  listItems.forEach(function(item) {
    const text = item.innerText.toLowerCase();
    item.style.display = text.includes(searchTerm) ? "" : "none";
  });
}

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("textbox").value;
  var novoItem = document.createTextNode(inputValue);

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  checkbox.addEventListener('change', function() {
    li.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
  });

  li.appendChild(checkbox);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    li.appendChild(novoItem);

    var btnExcluir = document.createElement("button");
    btnExcluir.innerText = "excluir";

    btnExcluir.addEventListener("click", function() {
      li.remove();
    });

    li.appendChild(btnExcluir);
    document.getElementById("lista").appendChild(li);
  }

  document.getElementById("textbox").value = "";
}
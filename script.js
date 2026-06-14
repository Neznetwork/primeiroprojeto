let lista= document.getElementById("lista");
let textbox= document.getElementById("textbox");

function newElement() {
var li = document.createElement("li");
var inputValue = document.getElementById("textbox").value;
var novoItem = document.createTextNode(inputValue);

 li.appendChild(novoItem);
 if (inputValue === '') {
    alert("You must write something!");
  } else {
var btnExcluir = document.createElement("button");
  btnExcluir.innerText = "excluir";

  btnExcluir.addEventListener("click", function(){
    li.remove();
  });

  li.appendChild(btnExcluir);

    document.getElementById("lista").appendChild(li);
  }
  document.getElementById("textbox").value = "";

}


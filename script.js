
function AT_add(v) {
  document.getElementById("inp").value += v;
  
}

function cls() {
  document.getElementById("inp").value= "";
}

function exe() {
  document.getElementById("inp").value = eval(document.getElementById("inp").value);
}
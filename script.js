// function showConsole() {
//   document.getElementById("h1").innerHTML = "Debugging with breakpoints";
//   console.log("Hello Console");
// }

function sum() {
  let n1 = document.getElementById("n1").value;
  let n2 = document.getElementById("n2").value;

  if (n1 === "" || n2 === "") {
    showError();
  } else {
    let res = n1 + n2;
    let result = n1 + "+" + n2 + "=" + res;
    document.getElementById("output").innerHTML = result;
  }
}
function showError() {
  document.getElementById("output").innerHTML = "Empty fields and";
}

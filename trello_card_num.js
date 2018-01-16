var numbersDom = document.getElementsByClassName("card-short-id");

Array.from(numbersDom).forEach(function (node) {
  node.innerText += " ";
  node.classList.remove("hide");
  let css = node.style;
  css.fontWeight = "bold";
})

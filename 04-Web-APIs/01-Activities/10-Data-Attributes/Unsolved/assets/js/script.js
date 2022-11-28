var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;
  var dataState = element.getAttribute("data-state");

  // TODO: Complete function
  console.log(event.target); 
  console.log(dataState);

  if (dataState === "hidden") {
    element.setAttribute("data-state", "visible");
    var dataNumber = element.getAttribute("data-number");
    console.log(dataNumber);
    element.textContent = dataNumber;
      }
      else (dataState === "visible") {
        element.setAttribute("data-state", "hidden");
        element.textContent = "";
      }
});

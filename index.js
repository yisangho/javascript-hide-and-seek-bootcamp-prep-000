function getFirstSelector(selector) {
  var ret = document.querySelector(selector)[0];
  return ret;
}

function nestedTarget() {
  const lis = document
  .getElementById("nested")
  .querySelectorAll("div.target");
}
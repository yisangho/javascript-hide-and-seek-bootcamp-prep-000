function getFirstSelector(selector) {
  var ret = document.querySelector(selector)[0];
  return ret;
}

function nestedTarget() {
  const lis = document
  .getElementById("nested")
  .querySelectorAll("div.target")

  return lis;
}

function increaseRankBy(n) {

}

function deepestChild() {
  const lis = document.getElementById("grand-node")

  return lis;
}

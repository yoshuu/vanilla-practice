const table = document.querySelector("table");

table.addEventListener("click", (e) => {
  let target = e.target;

  if (target.tagName != "TD") return;
  else {
    function highlight(target) {
      let selectedTd = target;
      selectedTd.classList.add("highlight");
      if (selectedTd) {
        selectedTd.classList.remove("highlight");
      }
    }
  }
});

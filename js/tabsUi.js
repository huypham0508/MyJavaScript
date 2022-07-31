const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabsUI = function () {
  const tabs = $$(".tab-item");
  const panes = $$(".tab-pane");
  const line = $(".line");
  const getActiveTab = $(".tab-item.active");
  line.style.left = getActiveTab.offsetLeft + "px";
  line.style.width = getActiveTab.offsetWidth + "px";
  tabs.forEach((item, index) => {
    item.addEventListener("click", () => {
      $(".tab-item.active").classList.remove("active");
      item.classList.add("active");

      line.style.left = item.offsetLeft + "px";
      line.style.width = item.offsetWidth + "px";

      $(".tab-pane.active").classList.remove("active");
      panes[index].classList.add("active");
    });
  });
};
tabsUI();

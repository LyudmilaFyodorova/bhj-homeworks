const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab__content');
const tabsArray = Array.from(tabs);


tabs.onclick = function () {
    tabs.classList.add("tab_active");
    tabContents.classList.add("tab__content_active");
}
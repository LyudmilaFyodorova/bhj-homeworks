const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab__content');
const tabArray = Array.from(tabs);
const tabContentsArray = Array.from(tabContents);

tabs.forEach(item => item.addEventListener('click', function () {
    let activeTabPosition = tabArray.findIndex((item) => item.className.includes('tab_active'));
    let activeTabContent = tabContentsArray.findIndex((item) => item.className.includes('tab__content_active'));

    tabArray[activeTabPosition].classList.remove("tab_active");
    tabContentsArray[activeTabContent].classList.remove("tab__content_active");

    tabArray[activeTabPosition].classList.add("tab_active");
    tabContentsArray[activeTabPosition].classList.add("tab__content_active");
}))
 
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab__content');
const tabArray = Array.from(tabs);

tabs.forEach(item => item.addEventListener('click', function () {
    let activeTabPosition = tabArray.findIndex((item) => item.className.includes('tab_active'));
    let activeTabContent = tabArray.findIndex((item) => item.className.includes('tab__content_active'));

    if (activeTabPosition === activeTabContent) {
        tabs[activeTabPosition].classList.remove("tab_active");
        tabContents[activeTabContent].classList.remove("tab__content_active");
    }

    tabs[activeTabPosition].classList.add("tab_active");
    tabs[activeTabPosition].classList.add("tab__content_active");
}))

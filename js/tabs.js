const tabs = document.querySelectorAll(".tabs");
const params = new URLSearchParams(location.search);

tabs.forEach((tab) => {
    const tabId = tab.id;
    const tabIndex = params.get(tabId) ?? 0;

    const tabItems = tab.querySelectorAll(".tab-item");
    const tabContents = tab.querySelectorAll(".content");

    if (tabItems.length) {
        tabItems[tabIndex].classList.add("active");
    }

    if (tabContents.length) {
        tabContents[tabIndex].classList.add("active");
    }

    tabItems.forEach((tabItem, tabIndex) => {
        tabItem.onclick = function () {
            if (tabIndex) {
                params.set(tabId, tabIndex);
            } else {
                params.delete(tabId);
            }
            const paramStr = params.size ? `?${params}` : "";
            const newUrl = `${location.pathname}${paramStr}${location.hash}`;
            history.replaceState(null, null, newUrl);

            // Handle activation tab
            const activationTab = tab.querySelector(".tab-item.active");
            if (activationTab) activationTab.classList.remove("active");

            this.classList.add("active");

            // Handle activation content
            const activationContent = tab.querySelector(".content.active");
            if (activationContent) activationContent.classList.remove("active");

            tabContents[tabIndex].classList.add("active");
        };
    });
});

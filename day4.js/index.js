function showTab(tabId) {
    // Hide all tabs
    var tabs = document.querySelectorAll('.tab');
    tabs.forEach(function(tab) {
        tab.classList.remove('active-tab');
    });

    // Show the selected tab
    var selectedTab = document.getElementById(tabId);
    selectedTab.classList.add('active-tab');
}
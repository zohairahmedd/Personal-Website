document.addEventListener('DOMContentLoaded', function() {
    // get all tab buttons and content
    const tabs = document.querySelectorAll('.journey-tab');
    const tabContents = document.querySelectorAll('.journey-tab-content');
    
    // add click event to each tab
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            
            // add active class to clicked tab
            this.classList.add('active');
            
            // jide all tab contents
            tabContents.forEach(content => content.classList.remove('active'));
            
            // show the corresponding tab content
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
});
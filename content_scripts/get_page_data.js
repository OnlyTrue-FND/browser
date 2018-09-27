(function() {
    /**
     * Check and set a global guard variable.
     * If this content script is injected into the same page again,
     * it will do nothing next time.
     */
    if (window.hasRun) {
        return;
    }
    window.hasRun = true;

    /**
     * Retrieves the page data we want and return the object.
     */
    function retrieveData() {
        return {
            "pageName": document.title
        };
    }

    /**
     * Listen for messages from the background script.
     * Call "retrieveData()".
     */
    browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
        if (message.command === "fetchData") {
            sendResponse(retrieveData());
        }
    });
})();
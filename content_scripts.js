chrome.runtime.onMessage.addListener(function(msg) {
    if (msg.isMonoFilter) {
        document.body.style.filter = 'grayscale(1)';
    } else {
        document.body.style.filter = 'grayscale(0)';
    }
});
const monoButton = document.getElementById('onClickMonoButton');
monoButton.addEventListener('click', onClickMono);

function onClickMono() {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            isMonoFilter: true
        });
    });
}

const removeMonoButton = document.getElementById('onClickRemoveMono');
removeMonoButton.addEventListener('click', onClickRemoveMono);

function onClickRemoveMono() {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            isMonoFilter: false
        });
    });
}

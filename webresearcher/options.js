
function saveOptions(e) {
  browser.storage.sync.set({
    wbjsToken: JSON.stringify(document.querySelector("#wbjsToken").value)
  });
  e.preventDefault();
}

function restoreOptions() {
  var gettingItem2 = browser.storage.sync.get('wbjsToken');
  gettingItem2.then((res) => {
    document.querySelector("#wbjsToken").value = JSON.parse(res.wbjsToken) || 'Firefox red';
  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);

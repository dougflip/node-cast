// Saves options to chrome.storage
function saveOptions() {
  var optionsToSave = {
    serverUrl: document.getElementById('serverUrl').value
  };

  chrome.storage.sync.set(optionsToSave, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

function restoreOptions() {
  var defaults = {
    serverUrl: 'http://localhost:9001'
  }
  chrome.storage.sync.get(defaults, function(items) {
    document.getElementById('serverUrl').value = items.serverUrl;
  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);

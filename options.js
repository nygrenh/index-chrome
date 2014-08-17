function save_options() {
  var indexUrl = document.getElementById('index-url').value;
  chrome.storage.sync.set({
    indexUrl: indexUrl
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

function restore_options() {
  chrome.storage.sync.get({
    indexUrl: "https://theindex.herokuapp.com/"
  }, function(items) {
    document.getElementById('index-url').value = items.indexUrl;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);

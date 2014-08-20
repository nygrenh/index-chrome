var indexUrl;
chrome.storage.sync.get({
  indexUrl: "https://theindex.herokuapp.com/"
}, function(items) {
  indexUrl = items.indexUrl;
});

var frame = document.getElementById("frame");
var loadHandler = function() {
  frame.removeEventListener('load', loadHandler);
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    var tab = tabs[0];
    if( indexUrl.charAt(indexUrl.length - 1) != "/" ) {
      indexUrl += "/";
    }
    indexUrl += "links/new?url=";
    indexUrl += encodeURIComponent(tab.url);
    indexUrl += "&title=" + encodeURIComponent(tab.title);
    frame.src = indexUrl;
  });
};
frame.addEventListener('load', loadHandler);

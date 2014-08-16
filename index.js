var indexUrl = "https://theindex.herokuapp.com/";
var frame = document.getElementById("frame");
var loadHandler = function() {
  frame.removeEventListener('load', loadHandler);
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    var tab = tabs[0];
    indexUrl += "links/new?url=";
    indexUrl += encodeURIComponent(tab.url);
    indexUrl += "&title=" + encodeURIComponent(tab.title);
    frame.src = indexUrl;
  });
};
frame.addEventListener('load', loadHandler);

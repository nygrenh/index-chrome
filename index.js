var indexUrl = "https://theindex.herokuapp.com/";
var frame = document.getElementById("frame");
var loadHandler = function() {
  frame.removeEventListener('load', loadHandler);
  frame.src = indexUrl + "links/new";
};
frame.addEventListener('load', loadHandler);

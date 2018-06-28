function onError(error) {
  console.log(`Error: ${error}`);
}

function onGot(item) {
  var zoom_input = 100;
  if (item.zoom_input) {
    zoom_input = item.zoom_input;
    console.log("found record",zoom_input);
  }
  var Page = document.getElementByTagName('body');
  Page.style.zoom = zoom_input/100;
  console.log("done resizing to ", zoom_input, '%');
}

var getting = browser.storage.local.get("zoom_input");
getting.then(onGot, onError);
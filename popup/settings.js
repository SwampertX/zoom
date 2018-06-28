function saveOptions(e) {
  e.preventDefault();
  browser.storage.local.set({
    zoom_input: document.querySelector("#zoom_input").value
  });
}

function restoreOptions() {

  function setCurrentChoice(result) {
    document.querySelector("#zoom_input").value = result.zoom_input || 100;
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  var getting = browser.storage.local.get("zoom_input");
  getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);


/*

//get the user-set zoom level and save it in json.txt

function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

function savePref(){
  var input = document.getElementById("zoom_input").value;
  console.log(input);
  input = toString(input);
  var data = {user_zoom_level:input};
  var jsonData = JSON.stringify(data);
  download(jsonData, 'json.txt', 'text/plain');
}

//reading the setting in json.txt and write it as default value
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

readTextFile("/Users/Documents/workspace/test.json", function(text){
    var data = JSON.parse(text);
    console.log(data);
    var user_zoom_level=data.user_zoom_level;
    document.getElementById("zoom_input").value = user_zoom_level;
});
*/
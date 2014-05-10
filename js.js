"use strict";
var stringa = '["2011-01-01 17:00","2011-01-01 18:00","2011-01-01 19:00","2011-01-01 20:00"]';
var stringb = '[3,4,5,2]';


var times = JSON.parse(stringa);
var vals = JSON.parse(stringb);


function buildForms(div){
  var html = '<p>select an array, index, and create a value</p><select id="arr"><option value="0">times</option><option value="1">values</option></select><select id="index">';
  var count = times.length;
  for (var i = 0; i <= count; i++){
    html = html + '<option value="' +  i + '">' + i + '</option>';
  }
  div.innerHTML = html + '</select><input id="value" /><button onclick="updateData();buildForms(document.getElementById(\'forms\'));showData(document.getElementById(\'clicky\'))">Update</button>';
}

function showData(div){
  var html = '<p>There is some data here...</p></p>';
  var time = '';
  var value = 0;
  var count = times.length;
  for (var i = 0; i < count; i++){
    time = times[i];
    value = vals[i];
    html = html + time + '] ' +  value + '<br />';
  }
  div.innerHTML = html + '</p>';
}

function updateData(){
  var arr = document.getElementById('arr').value;
  var index = document.getElementById('index').value;
  var value = document.getElementById('value').value;
  if (arr == 0){
    times[index] = value;
  }
  else{
    vals[index] = value;
  }

}

document.addEventListener('keydown', function(event) {
  var code = event.keyCode;
  if(code == 83 && event.ctrlKey) {
    console.log('Would  normally be saving!');
    window.event.preventDefault();
  }
  else if(code == 39) {
    console.log('Right was pressed');
  }
  else{
    console.log('Key Code: ' + code);
  }
});



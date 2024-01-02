'use strict';

document.addEventListener('DOMContentLoaded', function() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://z19zp87mli.execute-api.us-east-1.amazonaws.com/api');
  xhr.onload = function() {
    if (xhr.status === 200) {
      setTimeout(function() {
        var result = JSON.parse(xhr.responseText);
        document.querySelector('h1').innerText = result.message
      }, 2000);
    }
  };
  xhr.send();
});
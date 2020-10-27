'use strict';

document.addEventListener('DOMContentLoaded', function() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://did-falkirk-win-api.herokuapp.com/api/v1');
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
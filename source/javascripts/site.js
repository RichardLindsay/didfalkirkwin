'use strict';

document.addEventListener('DOMContentLoaded', function() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://www.footballwebpages.co.uk/fixtures-results.json?team=343&results=1&fixtures=0');
  xhr.onload = function() {
    if (xhr.status === 200) {
      setTimeout(function() {
        var result = JSON.parse(xhr.responseText);

        var homeTeamNumber = result.matchesTeam.match[0].homeTeamNo;
        var homeTeamScore = result.matchesTeam.match[0].homeTeamScore;
        var awayTeamScore = result.matchesTeam.match[0].awayTeamScore;

        if (homeTeamNumber == 343) {
          if (homeTeamScore > awayTeamScore) {
            document.querySelector('h1').innerText = 'Yes.';
          }
          else {
            document.querySelector('h1').innerText = 'No.';
          }
        }
        else {
          if (awayTeamScore > homeTeamScore) {
            document.querySelector('h1').innerText = 'Yes.';
          }
          else {
            document.querySelector('h1').innerText = 'No.';
          }
        }
      }, 2000);
    }
  };
  xhr.send();
});

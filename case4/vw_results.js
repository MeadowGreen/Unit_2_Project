"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 4

   Author: Meadow Green
   Date:   2-5-20
   
   Filename: vw_results.js
   
   Functions:
   
   The calcSum() function is a callback function used to
   calculte the total value from items within an array
   
   The calcPercent(value, sum) function calculates the percentage given
   a value and a sum
   
   The createBar(partyType, percent) function writes a different
   table data table based on the candidates party affilication.
   
      
*/
//added the title 
var reportHTML ="<h1>" + raceTitle + "</h1>";
//created a loop that will add the labels for each district
for(var i = 0; i < race.length; i++){
    var totalVotes = 0;
    votes[i].forEach(function calcSum(value) {
        totalVotes += value;
     });
     reportHTML += "<table> <caption>" + race[i] + "</caption> <tr><th>Candidate</th><th>Votes</th></tr>";
     
     candidateRows([i],totalVotes);          
     reportHTML += candidateRows([i],totalVotes);
     reportHTML += "</table>";
}
document.getElementsByTagName("section")[0].innerHTML = reportHTML;

function candidateRows(raceNum, totalVotes){
    var rowHTML = "";
//loop that finds the index for each candidate and adds it to the table
    for(var j = 0; j <= 2;  j++){
        var candidateName = candidate[raceNum][j];
        var candidateParty = party[raceNum][j];
        var candidateVotes = votes[raceNum][j];
        var candidatePercent = calcPercent(candidateVotes, totalVotes);
        rowHTML += "<tr> <td>" + candidateName + "(" + candidateParty + ")</td><td> "+ candidateVotes.toLocaleString() +"("+ candidatePercent.toFixed(1) +"%)</td>";
//adds the bar for each candidate 
        for(var k = 0; k < candidatePercent; k++){
            rowHTML += createBar(candidateParty);
        }
        rowHTML += "</tr>";
    }
    return rowHTML;
}

/* Callback Function to calculate an array sum */
function calcSum(value) {
   totalVotes += value;
}

/* Function to calculate a percentage */
function calcPercent(value, sum) {
   return (100*value/sum);
}

//depending on the party of the candidate it will create a certain class to add the colors to the bars
function createBar(partyType){
    var barHTML = "";
    switch (partyType){
        case "D":
        barHTML = "<td class='dem'></td>";
        break;
        case "R":
        barHTML = "<td class='rep'></td>";
        break;
        case "I":
        barHTML = "<td class='ind'></td>";
        break;
    }
    return barHTML;
}


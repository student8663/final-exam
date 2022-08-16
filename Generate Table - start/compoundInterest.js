// Write the code to generate table
// This function generates a compound interest table.
function generateTable(form) {
  var amount; // accumulated value for each new year
  var rate; // interest rate
  var years; // years for principal to grow
  var interest; // interest earned each year
  var table; // compound interest table
  var year = 1; // the year being calculated
  amount = form.elements['deposit'].valueAsNumber;  
  rate = form.elements['rate'].valueAsNumber;
  years = form.elements['years'].valueAsNumber;
  table =
    '<table>' +
    '<tr><th>Year</th><th>Starting Value</th>' +
    '<th>Interest Earned</th><th>Ending Value</th></tr>';

// ---> Write your code here to generate the table and show it in the page
// let initialDeposit = document.getElementById('deposit');
// let interestRate = document.getElementById('rate');
// let grow = document.getElementById('years');
// let interestRate= rate / 100;
// const result = document.getElementById('result');
// table += "<tr><td>1</td><td>" + amount + "</td><td>"+ amount * interestRate + "</td><td>" + (amount + amount*interestRate) +"</td></tr>";

// for(i=1;i<years;i++) {
//   let first,second,third,last;
//   first = (amount + amount*interestRate);
//   table += "<tr>";
// }

var interestRate = (rate / 100);
var interestEarned;
var total;

for(i = 0; i < years ; i++) {
  table +="<tr><td>" + i + "</td>";
  if(i == 0) {
    table += "<td>"+ amount + "</td><td>" + amount * interestRate + "</td><td>" + (amount + amount*interestRate) +"</td></tr>";
    continue;
  }
  amount = (amount + amount*interestRate);
  interestEarned = amount * interestRate;
  total = (amount + amount*interestRate);

  table += "<td>"+ amount + "</td><td>" + amount * interestRate + "</td><td>" + (amount + amount*interestRate) +"</td></tr>";
}





table += "</table>"

result.innerHTML = table;

} // end generateTable


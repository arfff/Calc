// This is a JavaScript file

var calcSteps = [];
calcList.push({n1:1, n2:2, op:'+'});

function stepToText(step) {
    n1 = " ";
    if (step.hasOwnProperty("n1")) then
        n1 = step.n1;
    n2 = " ";
    if (step.hasOwnProperty("n2")) then
        n2 = step.n2;
    op = " ";
    if (step.hasOwnProperty("op")) then
        op = step.op;
    return n1 + ' ' + op + ' ' + n2;
}

function numClic(a) {
    document.getElementById('calcArea').innerHTML = document.getElementById('calcArea').innerHTML + '\n ' + a;
}


function opClic(a) {
    document.getElementById('calcArea').innerHTML = document.getElementById('calcArea').innerHTML + '\n ' + a;
}

function clearLast() {
    calcText = document.getElementById('calcArea').innerHTML;
    if(calcText.lastIndexOf("\n")>0) {
        document.getElementById('calcArea').innerHTML = calcText.substring(0, calcText.lastIndexOf("\n"));
        
    } else {
        reset();
    }
}

function reset() {
    document.getElementById('calcArea').innerHTML = '';   
}

function submitResult() {
    
}

function calculate(equation)
{
  // equation can have characters 0-9, +, -, *, /, (, ), . and spaces
  // If there are any other characters, return an error
  
  var answer = 'err';

  if (equation.match(/^[0-9+\-*/(). ]*$/))
  {
    try
    {
      answer = equation != '' ? eval(equation) : '0';
    }
    catch (e)
    {
      // Syntax error - Do nothing... answer remains 'err'
    }
  }
  
  return answer;
}
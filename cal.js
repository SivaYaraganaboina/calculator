let currentDisplay='';
document.querySelector('#display').value=currentDisplay;

function appendDisplay(value){
  currentDisplay +=value;
  document.querySelector('#display').value=currentDisplay;
}

function clearDisplay(){
  currentDisplay ='';
  document.querySelector('#display').value=currentDisplay
}

function resultDisplay(){
  result=eval(currentDisplay);
  document.querySelector('#display').value=result;
}
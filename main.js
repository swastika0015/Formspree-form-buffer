//Clearing the previous data from the form
document.getElementById('myForm').reset()

document.getElementById('myForm').addEventListener('submit', function(event) {
  
  // Show the "Submitting..." message
  document.getElementById('loadingSymbol').style.display = 'block';

});
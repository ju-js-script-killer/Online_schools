function fun1() {
   var sel = document.getElementById('mySelect').selectedIndex;
   var options = document.getElementById('mySelect').options;
   alert('Choosen priority ' +options[sel].text);
}

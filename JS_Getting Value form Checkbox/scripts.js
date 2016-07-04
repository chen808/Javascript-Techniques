function myFunction() {
  var player = document.forms[0];
  var txt = "";

  for (var i=0; i<player.length; i++) {
    if(player[i].checked) {
      txt = txt + player[i].value + " ";
    }
  }
  document.getElementById("yourPlayer").innerHTML = "Your favorite player(s): " + txt;
}





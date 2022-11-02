

test= document.getElementById("test");
result = document.getElementById("result");


test.onclick=function () {

    var chaine  = document.getElementById("ch").value;

    var tableau = chaine.split(" ");
    var divise = (tableau[0].charAt(0) + "." + tableau[1].charAt(0)).toUpperCase();

    document.getElementById("result").innerHTML = divise;


}




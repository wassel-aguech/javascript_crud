

let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let b4 = document.getElementById("b4");
let b5 = document.getElementById("b5");
let b6 = document.getElementById("b6");
let b7 = document.getElementById("b7");
let b8 = document.getElementById("b8");
let b9 = document.getElementById("b9");
let b10 = document.getElementById("b10");
let btn = document.getElementById("btn");


var t = [];
window.onload = function () {
    b1.focus();
    b1.style.backgroundColor = "red";
}

b1.onblur = function () {
    if (b1.value != "") {
        t[0] = b1.value
        b2.focus();
        b1.style.backgroundColor = "green";
        b2.style.backgroundColor = "red";
    } else {

        b1.focus();
    }
}
b2.onblur = function () {
    if (b2.value != "") {
        t[1] = b2.value

        b3.focus();
        b2.style.backgroundColor = "green";
        b3.style.backgroundColor = "red";
    } else {
        b2.focus();

    }


}

b3.onblur = function () {
    if (b3.value != "") {
        t[2] = b3.value
        b4.focus();
        b3.style.backgroundColor = "green";
        b4.style.backgroundColor = "red";
    } else {
        b3.focus();
    }
}


b4.onblur = function () {

    if (b4.value != "") {

        t[3] = b4.value;

        b5.focus();
        b4.style.backgroundColor = "green";
        b5.style.backgroundColor = "red";
    } else {
        b4.focus();
    }
}

b5.onblur = function () {

    if (b5 != "") {

        t[4] = b5.value;

        b6.focus();
        b5.style.backgroundColor = "green";
        b6.style.backgroundColor = "red";

    } else {
        b5.focus();
    }
}
b6.onblur = function () {

    if (b6.value != "") {
        t[5] = b6.value;
        b7.focus();
        b6.style.backgroundColor = "green";
        b7.style.backgroundColor = "red";

    } else {
        b6.focus();
    }
}
b7.onblur = function () {

    if (b7.value != "") {
        t[6] = b7.value;

        b8.focus();
        b7.style.backgroundColor = "green";
        b8.style.backgroundColor = "red";
    } else {
        b7.focus();
    }
}
b8.onblur = function () {

    if (b8.value != "") {

        t[7] = b8.value;

        b9.focus();
        b8.style.backgroundColor = "green";
        b9.style.backgroundColor = "red";
    } else {
        b8.focus();
    }
}
b9.onblur = function () {

    if (b9.value != "") {
        t[8] = b9.value;

        b10.focus();
        b9.style.backgroundColor = "green";
        b10.style.backgroundColor = "red";
    } else {
        b9.focus();
    }


}

b10.onblur = function () {
    if (b10.value != "") {
        t[9] = b10.value;
        b10.style.backgroundColor = "green";

        btn.classList.remove("hide");
    } else {
        b10.focus();
    }


}
console.log(t);

btn.onclick = function () {
    var som = 0;
    for (let i = 0; i < t.length; i++) {
        //if(Math.signt(t[i])==1)
        if (t[i] > 0) {

            som += +t[i];
        }

    }


    console.log(`la somme des entier positif est ${som}`);
    document.getElementById("somme").innerHTML = `la sommme des entier positif est =  ${som}`



}




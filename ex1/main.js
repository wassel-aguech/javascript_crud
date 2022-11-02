
var t = [];
var som = 0;
var index;

for (let i = 0; i <= 9; i++) {

    t[i] = Number(prompt(`case ${i + 1}/10`));

    document.getElementById(`${i}`).innerHTML = `${t[i]}`

}

var valMin1 = t[0];
for (let i = 0; i < 10; i++) {
    if (valMin1 > t[i]) {
        valMin1 = t[i];
        index = i;
    }
    document.getElementById("firstMin").innerHTML = `first min integer : ${valMin1}`;
}
som += valMin1;
var min1 = t[index];
console.log(som);

t.splice(index, 1);
//console.log(t);

var valMin2 = t[0];
for (let i = 0; i < 9; i++) {
    if (valMin2 > t[i]) {
        valMin2 = t[i];
    }
    document.getElementById("secondMin").innerHTML = `second min integer : ${valMin2}`;

}


som += valMin2;
document.getElementById("somme").innerHTML = `SOMME = ${som}`;

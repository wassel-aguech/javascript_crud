
var user = JSON.parse(localStorage.getItem("user")) || []


var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var email = document.getElementById("email");
var Adresse = document.getElementById("Adresse");

var mod = "create";

 function insert() {
    var formValid = true;

    if (firstName.value == "") {
        firstName.classList.add("is-invalid");
        firstName.classList.remove("is-valid");
        formValid = false;
    } else {
        firstName.classList.add("is-valid");
        firstName.classList.remove("is-invalid");

    }

    if (lastName.value == "") {
        lastName.classList.add("is-invalid");
        lastName.classList.remove("is-valid");
        formValid = false;
    } else {
        lastName.classList.add("is-valid");
        lastName.classList.remove("is-invalid");

    }
    if (email.value == "") {
        email.classList.add("is-invalid");
        email.classList.remove("is-valid");
        email = false;
    } else {
        email.classList.add("is-valid");
        email.classList.remove("is-invalid");
    }

    if (Adresse.value == "") {
        Adresse.classList.add("is-invalid");
        Adresse.classList.remove("is-valid");
        formValid = false;
    } else {
        Adresse.classList.add("is-valid");
        Adresse.classList.remove("is-invalid");

    }


    if (formValid) {


        let homme = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            Adresse: Adresse.value,

        }
        if (mod == "create") {

            user.push(homme);
            window.location.reload();


        } else {

            user[temp] = homme;
            window.location.reload();



            mod="create";
          


        }
        localStorage.setItem("user", JSON.stringify(user));

        window.location.reload();


    }else{
        alert("form invalide");
    }
}

document.getElementById("ajout").addEventListener("click", insert);

function showData() {

    user.map((homme, i) => {
        document.getElementById("tbody").innerHTML += `
      
        <tr>
        <td>${i + 1}</td>
        <td>${homme.firstName}</td>

        <td>${homme.lastName}</td>
        <td>${homme.email}</td>
        <td>${homme.Adresse}</td>

        <td> <button class="btn btn-outline-success "data-bs-toggle="modal" 
        data-bs-target="#ajoutModal" onclick="update(${i})" >update</button>
        <button   class="btn btn-outline-danger m-1" onclick="suprimer(${i})">delete</button></td> 
        </tr>
        
        `
    })

}
showData()


function suprimer(i) {

    console.log(i);
    user.splice(i, 1);

    localStorage.user = JSON.stringify(user);
    window.location.reload()
}

var temp = null



 function update(i) {

    firstName.value = user[i].firstName;
    lastName.value = user[i].lastName;
    email.value = user[i].email;
    Adresse.value = user[i].Adresse;

    temp = i;
    document.getElementById("ajout").style.backgroundColor='green';
    document.getElementById("titremodal").innerHTML= "mode update";
    document.getElementById("ajout").innerHTML = "update";

    mod = "update";


}









var comp = JSON.parse(localStorage.getItem("comp")) || []
var user = JSON.parse(localStorage.getItem("user")) || []




var companyName = document.getElementById("companyName");
var Adresse = document.getElementById("Adresse");
var email = document.getElementById("email");
var employer = document.getElementById("employer")

var mod = "create";

 function insert() {
    var formValid = true;

    if (companyName.value == "") {
        companyName.classList.add("is-invalid");
        companyName.classList.remove("is-valid");
        formValid = false;
    } else {
        companyName.classList.add("is-valid");
        companyName.classList.remove("is-invalid");

    }

    if (Adresse.value == "") {
        Adresse.classList.add("is-invalid");
        Adresse.classList.remove("is-valid");
        formValid = false;
    } else {
        Adresse.classList.add("is-valid");
        Adresse.classList.remove("is-invalid");

    }
    if (email.value == "") {
        email.classList.add("is-invalid");
        email.classList.remove("is-valid");
        formValid = false;
    } else {
        email.classList.add("is-valid");
        email.classList.remove("is-invalid");
    }

    if (employer.value == "") {
        employer.classList.add("is-invalid");
        employer.classList.remove("is-valid");
        formValid = false;
    } else {
        employer.classList.add("is-valid");
        employer.classList.remove("is-invalid");
    }
  

    if (formValid) {


        let societe = {
            companyName: companyName.value,
            Adresse: Adresse.value,
            email: email.value,
            employer :employer.value,

        }
        if (mod == "create") {

            comp.push(societe);
            window.location.reload();


        } else {

            comp[temp] = societe;
            window.location.reload();



            mod="create";
          


        }
        localStorage.setItem("comp", JSON.stringify(comp));

        window.location.reload();


    }else{
        alert("form invalide");
    }
}

document.getElementById("ajouter").addEventListener("click", insert);

function showData() {

    comp.map((company, i) => {
        document.getElementById("tbody").innerHTML += `
      
        <tr>
        <td>${i + 1}</td>
        <td>${company.companyName}</td>
        <td>${company.Adresse}</td>
        <td>${company.email}</td>
        <td>${company.employer}</td>


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
    comp.splice(i, 1);

    localStorage.comp = JSON.stringify(comp);
    window.location.reload()
}

var temp = null;



 function update(i) {

    companyName.value = comp[i].companyName;
    Adresse.value = comp[i].Adresse;
    email.value = comp[i].email;
    employer.value = comp[i].employer;




    temp = i;
    document.getElementById("ajouter").style.backgroundColor='green';
    document.getElementById("titremodal").innerHTML= "mode update";
    document.getElementById("ajouter").innerHTML = "update";

    mod = "update";


}






var option = document.getElementById("employer");

function loadEmployer() {
    user.map((user, i) => {
        document.getElementById("employer").innerHTML += `<option value="${user.firstName}">${user.firstName}</option>`;

    })
}

loadEmployer();
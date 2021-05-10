const allPeople = document.getElementById("all-people");

function allHistoricalGuests(){
    fetch("http://localhost:3000/guests")
    .then(resp => resp.json())
    .then(json => getHistoricalPeople(json))
}

function getHistoricalPeople(data){
    data.forEach(element => {
        const personElement = document.createElement("option");
        personElement.value = element["name"];
        personElement.innerText = element["name"];
        allPeople.appendChild(personElement);

    });    
}


allHistoricalGuests();


function selectGuest(input){
    console.log(input.target.value);
    return input.target.value;
}

allPeople.addEventListener("change", input => selectGuest(input))



function allHistoricalGuests(){
    fetch("http://localhost:3000/guests")
    .then(resp => resp.json())
    .then(json => getHistoricalPeople(json))
}

function getHistoricalPeople(data){
    const allPeople = document.getElementById("all people");
    data.forEach(element => {
        const personElement = document.createElement("option");
        personElement.innerText = element["name"];
        allPeople.appendChild(personElement);
    });    
}


document.getElementById("all people").addEventListener("change", );


function selectGuest(){
    
}










allHistoricalGuests();

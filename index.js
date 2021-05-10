const allPeople = document.getElementById("all-people");
const guestList = document.getElementById("Guest List");

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
    inviteSelectedGuest(input.target.value)
}

allPeople.addEventListener("change", input => selectGuest(input))


function inviteSelectedGuest(guest){
    guestListItem = document.createElement("li");
    guestListItem.innerText = guest;
    guestList.appendChild(guestListItem);
}

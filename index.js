const allPeople = document.getElementById("all-people");
const guestList = document.getElementById("Guest List");
const guestIndexUrl = "http://localhost:3000/guests";

function allHistoricalGuests(){
    fetch(guestIndexUrl)
    .then(resp => resp.json())
    .then(json => getHistoricalPeople(json))
}

function getHistoricalPeople(data){
    data.forEach(element => {
        const personElement = document.createElement("option");
        personElement.value = element["id"];
        personElement.innerText = element["name"];
        allPeople.append(personElement);

    });    
}

allHistoricalGuests();

function selectGuest(input){
    const guest_id = input.target.value;
    const guestName = document.querySelector("option[value=" +  `\"${guest_id}\"]`).innerText;
    const guest = {id: guest_id, name: guestName }

    inviteSelectedGuest(guest)
}

allPeople.addEventListener("change", input => selectGuest(input))


function inviteSelectedGuest(guest){
    guestListItem = document.createElement("li");
    guestListItem.value = guest["id"];
    guestListItem.innerText = guest["name"];
    guestList.appendChild(guestListItem);
    guestListItem.addEventListener("click", speaker => saySomething(speaker))
}

function saySomething(speaker){
    getQuote(speaker);
}

function getQuote(speaker){
    guestId = speaker.target.value;
    fetch("http://localhost:3000/quotes/" + `${guestId}`)
    .then(resp => resp.json())
    .then(json => console.log(json)) 
}

const url = "http://localhost:3000";


const partyID = document.getElementById("party_id");
const allPeople = document.getElementById("all-people");
const guestList = document.getElementById("Guest List");

const indexPartiesButton = document.getElementById("index_parties");
const createPartyButton = document.getElementById("create_party");

indexPartiesButton.addEventListener("click", Party.indexParties);
createPartyButton.addEventListener("click", Party.newParty);


function clearHTMl(){
    partyID.innerText = "";
    // Can use removeChild for text? - it improves permoformance, according to the internet
    
    while (guestList.firstChild) {
        guestList.removeChild(guestList.firstChild);
    }
}











function allHistoricalGuests(){
    fetch(`${url}/guests`)
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

    fetchQuote(speaker);
}

function fetchQuote(speaker){
    guestId = speaker.target.value;
    fetch(`http://localhost:3000/quotes/${guestId}`)
    .then(resp => resp.json())
    .then(json => parseQuote(json))
}

function parseQuote(json){
    console.log(json);
    const quote = {id: json["id"], content: json["content"]};
    return quote;
}


class Party{

    constructor(id){
        this.id = id;
    }

    static render(json){
        const partyObj = new Party(json["id"]);
        return partyID.innerText = "Party Number: " + partyObj.id;
    }

    static newParty(){
        PartyAPI.createParty();
    }

}



class PartyAPI {
    
    static createParty(){
        const objURL = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: ""
        };
        fetch(url + "/parties", objURL)
        .then(response => response.json())
        .then(function(json) {
            console.log(json)
            Party.render(json);
        })
    }

}
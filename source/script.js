const addPlayerButton = document.querySelector(".addPlayerButton");
const hiddenForm = document.querySelector(".HiddenForm");
const slectplayerToAdd = document.querySelector(".slectplayerToAdd")

const playerListContainer = document.querySelector(".playerList");



// ALL player
const nameInput = document.querySelector("#playerName");
const photoInput = document.querySelector("#playerImage");
const positionInput = document.querySelector("#Position_input");
const countryInput = document.querySelector("#COUNTRY");
const clubInput = document.querySelector("#playerClub");
const logoInput = document.querySelector("#playerLogo");
const ratingInput = document.querySelector("#playerRating");

// normaL player

const regularPlayerForm = document.getElementById("regularPlayer");

const paceInput = document.querySelector("#playerPAC");
const shootingInput = document.querySelector("#playerSHO");
const passingInput = document.querySelector("#playerPAS");
const dribblingInput = document.querySelector("#playerDRI");
const defendingInput = document.querySelector("#playerDEF");
const physicalInput = document.querySelector("#playerPHY");

// gool keeper
const GoalKeeperPlayerForm = document.getElementById("GoalKeeperPlayer");

const divingInput = document.querySelector("#DIV");
const handlingInput = document.querySelector("#HAN");
const kickingInput = document.querySelector("#KIC");
const reflexesInput = document.querySelector("#REF");
const speedInput = document.querySelector("#SPE");
const positioningInput = document.querySelector("#POS");

let x = 27;
let allPlayers = [];

addPlayerButton.addEventListener("click", DisplayForm);
function DisplayForm() {
    hiddenForm.style.display = "block";
}

document.querySelector("#CloseForm").addEventListener("click", HideForm)
function HideForm() {
    hiddenForm.style.display = "none";
}

const selectPosition = document.getElementById('Position_input');

selectPosition.addEventListener('change', function () {
    const selectedValue = selectPosition.value;

    if (selectedValue == 'GK') {
        regularPlayerForm.style.display = "none";
        GoalKeeperPlayerForm.style.display = "block"
    } else if (selectedValue == 'None') {
        regularPlayerForm.style.display = "none";
        GoalKeeperPlayerForm.style.display = "none"
    }
    else {
        GoalKeeperPlayerForm.style.display = "none";
        regularPlayerForm.style.display = "block";
    }

    // console.log(selectedValue);
});



document.getElementById("submitForm").addEventListener("click", AddToArray)
function AddToArray(event) {
    event.preventDefault();
    
    const player = {
        name: nameInput.value,
        photo: photoInput.value,
        position: positionInput.value,
        nationality: countryInput.value,
        club: clubInput.value,
        rating: ratingInput.value,

    }
    if (player.PlayerPosition == 'GK') {
        player.Details = {
            diving: divingInput.value,
            handling: handlingInput.value,
            kicking: kickingInput.value,
            reflexes: reflexesInput.value,
            speed: speedInput.value,
            position: positioningInput.value
        }
    } else {
        player.Details = {
            pace: paceInput.value,
            shooting: shootingInput.value,
            passing: passingInput.value,
            dribbling: dribblingInput.value,
            defending: defendingInput.value,
            physical: physicalInput.value
        }

    }
    allPlayers.push(player);
    // console.log(player);
    // console.log(player.Details)

    hiddenForm.style.display = "none";
    document.querySelector("form").reset();
    console.log(allPlayers);
}
function AddPlayerByPosition(id) { 
    let tempID = id;
    if(id === 'CR' || id === 'LM' || id === 'CDM'){
        id = 'CM'
    }
    console.log("Selected Position ID:", id);

    playerListContainer.innerHTML = '';
    allPlayers.forEach((player, index) => {
        if(player.position === id){
            const escapedName = player.name.replace(/'/g, " ");
            playerListContainer.innerHTML += `
                <div class="playerChangeCard" onclick="RepalcePlayer('${tempID}','${escapedName}', '${index}')">
                    <div class="change_icon"></div>
                    <img src="${player.photo}" class="playerImageForchange" alt="Player">
                    <div class="details">
                        <div class="name">${player.name}</div>
                        <div class="position">${player.position}</div>
                    </div>
                </div>
            `;
            // console.log("Player Position:", player.position);
            // console.log("Player Name:", player.name);
        }
        
    });
}

function RepalcePlayer(PositionOfThePlayer, NameAsId, index){
    console.log("RepalcePlayer name ", NameAsId)
    console.log("onclicl function ", PositionOfThePlayer)  
    console.log("onclicl fun ", index)
    
    document.getElementById(PositionOfThePlayer).innerHTML = `
                    <div class="CardTop">
                        <div class="topInfo">
                            <div class="score">97</div>
                            <div class="post">${allPlayers[index].position}</div>
                            <div class="country"><img src="${allPlayers[index].flag}"></div>
                            <div class="club"><img src="${allPlayers[index].logo}"></div>
                        </div>
                        <div class="imgPlayer">
                            <img src="${allPlayers[index].photo}">
                        </div>
                    </div>
                    <div class="playerName">
                        <div class="playerN">${allPlayers[index].name}</div>
                    </div>
                    <div class="CardBottom">
                        <div class="CartInfoLeft">
                            <div class="pac">PAC : ${allPlayers[index].passing}</div>
                            <div class="sho">SHO : ${allPlayers[index].shooting}</div>
                            <div class="pas">PAS : ${allPlayers[index].passing}</div>
                        </div>
                        <div class="CartInfoRight">
                            <div class="dri">DRI : ${allPlayers[index].dribbling}</div>
                            <div class="def">DEF : ${allPlayers[index].defending}</div>
                            <div class="phy">PHY : ${allPlayers[index].physical}</div>
                        </div>
                    </div>
    `
}

fetch('https://raw.githubusercontent.com/aymanebenhima/FUT-Champ-Ultimate-Team-Assets/main/players.json')
    .then(Resp => Resp.json())
    .then(playerData => {
        allPlayers = playerData.players;
        // console.log(allPlayers);
    })
    .catch(error => console.error('error', error));
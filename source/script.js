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
const positioninGKgInput = document.querySelector("#POS");
let allPlayers = [];
let PlayerAreadyAdded = [];

addPlayerButton.addEventListener("click", DisplayForm);
function DisplayForm() {
    hiddenForm.style.display = "block";
};
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
});

document.getElementById("submitForm").addEventListener("click", AddToArray)
function AddToArray(event) {
    event.preventDefault();

    if(positionInput.value === 'None'){
        alert('Selecet Proplem')
    }
    const nameRegex = /^[A-Za-z\s]+$/;
    const ratingRegex = /^(100|[1-9][0-9]?)$/;
    const photoRegex = /^(http|https):\/\/.+/;
    const flagRegex = /^(http|https):\/\/.+/;
    const logoRegex = /^(http|https):\/\/.+/;
    const statsRegex = /^(100|[1-9][0-9]?)$/;
    if (!nameRegex.test(nameInput.value)) {
        alert("Le nom du joueur doit contenir uniquement des lettres et des espaces.");
        return;
    }
    if (!ratingRegex.test(ratingInput.value)) {
        alert("La note doit être un nombre entre 1 et 100.");
        return;
    }
    if (!photoRegex.test(photoInput.value)) {
        alert("L'URL de la photo doit être valide.");
        return;
    }
    if (!flagRegex.test(countryInput.value)) {
        alert("L'URL du drapeau doit être valide.");
        return;
    }
    if (!logoRegex.test(clubInput.value)) {
        alert("L'URL du logo doit être valide.");
        return;
    }
    console.log("div ", speedInput.value);
    if (positionInput.value == 'GK') {
        const stats = [divingInput.value, handlingInput.value, kickingInput.value, reflexesInput.value, speedInput.value, positioninGKgInput.value];
        for (const stat of stats) {
            if (statsRegex.test(stat)) {
                alert("Les statistiques doivent être des nombres ET entre 0 - 100");
                return;
            }
        }
        allPlayers.push({
            name: nameInput.value,
            photo: photoInput.value,
            position: positionInput.value,
            nationality: countryInput.value,
            club: clubInput.value,
            rating: ratingInput.value,
            diving: divingInput.value,
            handling: handlingInput.value,
            kicking: kickingInput.value,
            reflexes: reflexesInput.value,
            speed: speedInput.value,
            positioning: positioninGKgInput.value
        });
    } else {
        const stats = [paceInput.value, shootingInput.value, passingInput.value, dribblingInput.value, defendingInput.value, physicalInput.value];
        for (const stat of stats) {
            if (statsRegex.test(stat)) {
                alert("Les statistiques doivent être des nombres ET entre 0 - 100");
                return;
            }
        }
        allPlayers.push({
            name: nameInput.value,
            photo: photoInput.value,
            position: positionInput.value,
            nationality: countryInput.value,
            club: clubInput.value,
            rating: ratingInput.value,
            pace: paceInput.value,
            shooting: shootingInput.value,
            passing: passingInput.value,
            dribbling: dribblingInput.value,
            defending: defendingInput.value,
            physical: physicalInput.value
        });
    }
    console.log("here is the length of array", allPlayers);
    hiddenForm.style.display = "none";
    document.querySelector("form").reset();
}
function AddPlayerByPosition(id) {
    playerListContainer.innerHTML = '';

    let tempID = id;
    if (id === 'CR' || id === 'LM' || id === 'CDM') {
        id = 'CM'
    }
    allPlayers.forEach((player, index) => {
        const playerFound = PlayerAreadyAdded.find(addedPlayer => addedPlayer === player.name);
        if (player.position === id && playerFound === undefined) {
            playerListContainer.innerHTML += `
                <div class="playerChangeCard" onclick="RepalcePlayer('${tempID}', '${player.name}', ${index}) ">
                    <img src="${player.photo}" class="playerImageForchange" alt="Player">
                    <div class="details">
                        <div class="name">${player.name}</div>
                        <div class="position">${player.position}</div>
                    </div>
                </div>
            `;
        }
    });
}
function RepalcePlayer(PositionOfThePlayer, NameAsId, index) {
    // console.log("RepalcePlayer name ", NameAsId)
    // console.log("onclicl function ", PositionOfThePlayer)  
    // console.log("onclicl fun ", index)
    let Details = `<div class="CardBottom">
                        <div class="CartInfoLeft">
                            <div class="pac">PAC : ${allPlayers[index].passing}</div>
                            <div class="sho">SHO : ${allPlayers[index].shooting}</div>
                            <div class="pas">PAS : ${allPlayers[index].passing}</div>
                        </div>
                        <div class="CartInfoRight">
                            <div class="dri">DRI : ${allPlayers[index].dribbling}</div>
                            <div class="def">DEF : ${allPlayers[index].defending}</div>
                            <div class="phy">PHY : ${allPlayers[index].physical}</div>
                        </div>`
    if (PositionOfThePlayer == 'GK') {
        Details = `<div class="CardBottom">
                                            <div class="CartInfoLeft">
                                                <div class="pac">DIV : ${allPlayers[index].diving}</div>
                                                <div class="sho">SHO : ${allPlayers[index].handling}</div>
                                                <div class="pas">PAS : ${allPlayers[index].speed}</div>
                                            </div>
                                            <div class="CartInfoRight">
                                                <div class="dri">DRI : ${allPlayers[index].reflexes}</div>
                                                <div class="def">KIC : ${allPlayers[index].kicking}</div>
                                                <div class="phy">PHY : ${allPlayers[index].positioning}</div>
                                            </div>
                                            `}
    document.getElementById(PositionOfThePlayer).innerHTML = `
    <button class="delete" onclick="deleteFunction('${allPlayers[index].name}','${PositionOfThePlayer}')"></button>
    <div class="CardTop" ondblclick="deleteFunction('${allPlayers[index].name}','${PositionOfThePlayer}')">
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
                    ${Details}`
    PlayerAreadyAdded.push(allPlayers[index].name);
    console.log("PlayerAreadyAdded : from RepalcePlayer() ", PlayerAreadyAdded);
}
function deleteFunction(nameID, positionOfPlayer) {
    console.log("delete function name id / positionOfPlayer", nameID, positionOfPlayer)
    PlayerAreadyAdded = PlayerAreadyAdded.filter(player => player != nameID)
    document.getElementById(positionOfPlayer).innerHTML = ` <div class="divButton"> <button onclick="AddPlayerByPosition('LW')"> <img id="addPlayerIcon"
    src="images/ADD.png" alt=""></button></div>  `;
}
fetch('https://raw.githubusercontent.com/aymanebenhima/FUT-Champ-Ultimate-Team-Assets/main/players.json')
    .then(Resp => Resp.json())
    .then(playerData => {
        allPlayers = playerData.players;
        console.log(allPlayers);
        console.log("here is fetch :", allPlayers);
    })
    .catch(error => console.error('error', error));
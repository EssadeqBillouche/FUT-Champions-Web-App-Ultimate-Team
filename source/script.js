const addPlayerButton = document.querySelector(".addPlayerButton");
const hiddenForm = document.querySelector(".HiddenForm")
// ALL player
const nameP = document.querySelector("#playerName");
const photo = document.querySelector("#playerImage");
const position = document.querySelector("#Position_input");
const COUNTRY = document.querySelector("#COUNTRY");
const club = document.querySelector("#playerClub");
const logo = document.querySelector("#playerLogo");
const rating = document.querySelector("#playerRating");

// normaL player

const regularPlayerForm = document.getElementById("regularPlayer");

const pace = document.querySelector("#playerPAC");
const shooting = document.querySelector("#playerSHO");
const passing = document.querySelector("#playerPAS");
const dribbling = document.querySelector("#playerDRI");
const defending = document.querySelector("#playerDEF");
const physical = document.querySelector("#playerPHY");

// gool keeper
const GoalKeeperPlayerForm = document.getElementById("GoalKeeperPlayer");

const GKDIV = document.querySelector("#DIV");
const GKHAN = document.querySelector("#HAN");
const GKKIC = document.querySelector("#KIC");
const GKREF = document.querySelector("#REF");
const GKSPE = document.querySelector("#SPE");
const GKPOS = document.querySelector("#POS");

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
    } else {
        GoalKeeperPlayerForm.style.display = "none";
        regularPlayerForm.style.display = "block";
    }

    console.log(selectedValue);
});



document.getElementById("submitForm").addEventListener("click", AddToArray)
function AddToArray(event) {
    event.preventDefault();
    const player = {
        PlayerName: nameP.value,
        PlayerPhot: photo.value,
        PlayerPosition: position.value,
        PlayerCOUNTRY: COUNTRY.value,
        PlayerClub: club.value,
        PlayerRating: rating.value,

    }
    if (player.position === 'GK') {
        player.Details = {
            gooldiv: GKDIV.value,
            goolhan: GKHAN.value,
            goolkicref: GKKIC.value,
            gool: GKREF.value,
            goolspe: GKSPE.value,
            goolpos: GKPOS.value
        }
    } else {
        player.Details = {
            Normalpace : pace.value,
            Normalshooting : shooting.value,
            Normalpassing : passing.value,
            Normaldribbling : dribbling.value,
            normaldefending : defending.value,
            normalphysical : physical.value
        }

    }
    allPlayers.push(player);
    console.log(player);
    console.log(player.Details)
    hiddenForm.style.display = "none";
    document.querySelector("form").reset();
    console.log(allPlayers);
}






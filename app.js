
const btn = document.getElementById("inscrire");
const namep = document.getElementById("nom");
const age = document.getElementById("age");

let players = []


function affichageplayers(){
    
}

btn.addEventListener("click",() => {
let nam = namep.value
let age1 = age.value
namep.value = null ; 
age.value = null ;
let player = {
    id : players.length,
    nameofplayer : nam,
    age : age1
}
players.push(player) ;
console.log(players)
})
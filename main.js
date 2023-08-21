var url_string = window.location.href
var url = new URL(url_string);
var secretSantaEncoded = url.searchParams.get("r");
var nameEncoded = url.searchParams.get("o");
secretSantaEncoded = secretSantaEncoded.replace(" ", "+")

console.log(secretSantaEncoded);
console.log(nameEncoded);

const secretSanta = atob(secretSantaEncoded).replace(/[^a-zA-Z ]/g, '');
const name = atob(nameEncoded).replace(/[^a-zA-Z ]/g, '');

console.log(secretSanta);
console.log(name);
// console.log(name)

// var secretSanta = atob(result[query])
// var name = atob(query)

document.getElementById("result").innerHTML = secretSanta
document.getElementById("top").innerHTML = 'Oi '+ name + '! No amigo secreto você tirou'
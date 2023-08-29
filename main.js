// var url_string = window.location.href
// var url = new URL(url_string);
// var secretSantaEncoded = url.searchParams.get("r");
// var nameEncoded = url.searchParams.get("o");
// var groupEncoded = url.searchParams.get("");
// secretSantaEncoded = secretSantaEncoded.replace(" ", "+")

// console.log(secretSantaEncoded);
// console.log(nameEncoded);

// const secretSanta = atob(secretSantaEncoded).replace(/[^a-zA-Z ]/g, '');
// const name = atob(nameEncoded).replace(/[^a-zA-Z ]/g, '');
// const group = atob(groupEncoded).replace(/[^a-zA-Z ]/g, '');

const secretSanta = 'Siclano';
const name = 'Fulano';
const group = 'Amigos';

console.log(secretSanta);
console.log(name);
// console.log(group)

// var secretSanta = atob(result[query])
// var name = atob(query)

document.getElementById("top").innerHTML = `Oi ${name}!`;
document.getElementById("group").innerHTML = `No amigo secreto do grupo <strong class="content__text-strong">${group}</strong>, você tirou...`;
document.getElementById("result").innerHTML = secretSanta;

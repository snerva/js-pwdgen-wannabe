//Chiedi all’utente il suo nome
const userFirstName = prompt('Qual\'é il tuo nome?')
console.log(userFirstName)
//chiedi il suo cognome,
const userLastName = prompt('Qual\'é il tuo cognome?')
//chiedi il suo colore preferito
const userBestColor = prompt('Qual\'é il tuo colore preferito?')
//scrivi sulla pagina nomecognomecolorepreferito22
document.getElementById("your_password").innerHTML = `${userFirstName + userLastName + userBestColor}22`
const rock = document.getElementById("rock")
const message = () => alert('Hello, I am your pet rock.')

const touchRock = () => {
  let userName = prompt("What is your name?","Enter your name here.")

  if(userName != "Enter your name here." && userName != null){
    rock.src = "rock_happy.png"
    alert(`It is good to meet you, ${userName}`)
  }
}
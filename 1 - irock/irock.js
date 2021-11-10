const rock = document.getElementById("rock")
rock.style.cursor = "pointer"
const mensagem = () => alert("Olá tudo bem?")

const touchRock = () => {
  let nome = prompt("Qual o seu nome?","Coloque seu nome aqui")
  if(nome != "Coloque seu nome aqui"){
    rock.style.backgroundColor = "pink"
    alert(`Prazer em conhecer voce ${nome}`)
  }else{
    rock.style.backgroundColor = "chocolate"
  }
}
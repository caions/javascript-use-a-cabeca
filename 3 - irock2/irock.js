const rock = document.getElementById("rock");
const body = document.querySelector("body");
const check = document.getElementById("check");
// parei na linha 97

const greetUser = () => alert("Hello, I am your pet rock.");

const resizeRock = () => {
  if (document.body.clientWidth < 222) {
    rock.style.width = "100px";
  } else {
    rock.style.width = "227px";
  }
};
// alternative resize with observer
/* new ResizeObserver(() => {
  if (body.clientWidth < 222) {
    rock.style.width = "100px";
  } else {
    rock.style.width = "227px";
  }
}).observe(body); */

const sadRock = () => {
  rock.src = "rock_sad.png";
};

const furiousRock = () => {
  setInterval(() => {
    if (Math.floor(Math.random() * 1000) <= 50) {
      rock.src = "rock_furious.png";
      console.log("furiosa");
    }
  }, 10 * 1000);
};

const aloneRock = () => {
  setTimeout(() => {
    console.log("chamou o intervalo do alone");
    if (rock.src != "rock_furious.png") {
      rock.src = "rock.png";
    }
  }, 10 * 1000);
};

let userName;
const touchRock = () => {
  // TODO refactor conditional
  if (userName == undefined || userName == "Enter your name here.") {
    userName = prompt("What is your name?", "Enter your name here.");
    if (userName != "Enter your name here.") {
      rock.src = "rock_happy.png";
      alert(`It is good to meet you, ${userName}`);
      aloneRock();
    }
  } else {
    alert(`Obrigado ${userName} eu gosto de atenção`);
    rock.src = "rock_happy.png";
    aloneRock();
  }
};

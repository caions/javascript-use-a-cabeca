const rock = document.getElementById("rock");
const body = document.querySelector("body");
const check = document.getElementById("check");
// parei na linha 118

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
  /*   setInterval(() => {
    if (Math.floor(Math.random() * 1000) <= 50) {
      rock.src = "rock_furious.png";
      alert("Estou com raiva sem nenhum motivo");
    }
  }, 10 * 1000); */
};

const aloneRock = () => {
  setTimeout(() => {
    if (rock.src != "rock_furious.png") {
      rock.src = "rock.png";
    }
  }, 10 * 1000);
};

const writeCookie = (name) => {
  document.cookie = `username=${name}`;
};

// TODO fix read only username cookie, where has one or more cookies
const readCookie = () => {
  const cookie = document.cookie;
  const userNameCookie = cookie.slice(cookie.indexOf("=") + 1);
  return userNameCookie;
};

let userName = readCookie() || undefined;

const greetUser = () => {
  if (userName) {
    alert(`Hello,${userName} i miss you.`);
  } else {
    alert("Hello, I am your pet rock.");
  }
};

const touchRock = () => {
  // TODO refactor conditional
  if (userName == undefined || userName == "Enter your name here.") {
    userName = prompt("What is your name?", "Enter your name here.");
    if (userName != "Enter your name here.") {
      rock.src = "rock_happy.png";
      alert(`It is good to meet you, ${userName}`);
      writeCookie(userName);
      aloneRock();
    }
  } else {
    alert(`Thank you ${userName} i like attention`);
    rock.src = "rock_happy.png";
    aloneRock();
  }
};

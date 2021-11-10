const tax = document.forms[0].tax;
const total = document.forms[0].total;

function placeOrder() {
  const name = document.forms[0].name.value;
  const minutes = document.forms[0].minutes.value;

  if (name == "") {
    alert("Você precisa fornecer um nome antes de enviar o pedido.");
  } else if (isNaN(minutes) == true || minutes == "") {
    alert(
      "Você deve fornecer o numero de minutos até a coleta antes de enviar o pedido"
    );
  } else {
    // forms.submit()
  }
}

function parseDonuts(donutString) {
  let numDonuts = parseInt(donutString);
  if (donutString.split(" ")[1] == "dozen") numDonuts *= 12;
  return numDonuts;
}

function updateOrder() {
  const DONUTS_PRICE = 0.5;
  const TAX_RATE = 0.0925;

  let numCakeDonuts = parseDonuts(document.forms[0].cakeDonuts.value);
  let numGlazedDonuts = parseDonuts(document.forms[0].glazedDonuts.value);

  if (isNaN(numCakeDonuts)) numCakeDonuts = 0;
  if (isNaN(numGlazedDonuts)) numGlazedDonuts = 0;

  let subTotal = (numCakeDonuts + numGlazedDonuts) * DONUTS_PRICE;
  let tax = subTotal * TAX_RATE;
  let total = tax + subTotal;

  document.forms[0].subTotal.value = "$" + subTotal.toFixed(2);
  document.forms[0].tax.value = "$" + tax.toFixed(2);
  document.forms[0].total.value = "$" + total.toFixed(2);
}

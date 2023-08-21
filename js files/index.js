// get the taka value from id

// card -1
document.getElementById("card-1").addEventListener("click", function () {
  // get card price
  const ProductPrice = getPrice("taka-1");
  // current  price
  const previousPrice = document.getElementById("price-id");
  const previousPriceString = previousPrice.innerText;
  const previousPriceNumber = parseFloat(previousPriceString);
  //  validation -1
  const button = document.querySelector("#make-purchase");
  if (ProductPrice > 0) {
    button.removeAttribute("disabled");
  }

  // apply button validation -2
  const buttonApply = document.getElementById("apply");
  if (previousPriceNumber > 200) {
    buttonApply.removeAttribute("disabled");
  }

  // set price
  const currentPrice = previousPriceNumber + ProductPrice;
  const price = (previousPrice.innerText = currentPrice);

  // set total price
  const totalPricePrevious = document.getElementById("total-id");
  const totalPrice = (totalPricePrevious.innerText = price);

  //   add product in a list
  const parent = document.querySelector("#parent-div");
  const p = document.createElement("p");
  const name = document.getElementById("name-1").innerText;

  const count = parent.childElementCount;
  p.classList = "font-bold";
  p.innerHTML = `
  ${count + 1}. ${name}
  `;
  parent.appendChild(p);
});

// ************************ card -2
document.getElementById("card-2").addEventListener("click", function () {
  // get card price
  const ProductPrice = getPrice("taka-2");

  // current  price
  const previousPrice = document.getElementById("price-id");
  const previousPriceString = previousPrice.innerText;
  const previousPriceNumber = parseFloat(previousPriceString);
  //  validation
  const button = document.querySelector("#make-purchase");
  if (ProductPrice > 0) {
    button.removeAttribute("disabled");
  }
  // apply button validation -2
  const buttonApply = document.getElementById("apply");

  if (previousPriceNumber > 200) {
    buttonApply.removeAttribute("disabled");
  }
  // set price up
  const currentPrice = previousPriceNumber + ProductPrice;
  const price = (previousPrice.innerText = currentPrice);

  // set total price down
  const totalPricePrevious = document.getElementById("total-id");
  const totalPrice = (totalPricePrevious.innerText = price);

  //   add product in a list
  const parent = document.querySelector("#parent-div");
  const p = document.createElement("p");
  const name = document.getElementById("name-2").innerText;

  const count = parent.childElementCount;
  p.classList = "font-bold";
  p.innerHTML = `
  ${count + 1}. ${name}
  `;
  parent.appendChild(p);
});
// ****************************** card -3
document.getElementById("card-3").addEventListener("click", function () {
  // get card price
  const ProductPrice = getPrice("taka-3");

  // current  price
  const previousPrice = document.getElementById("price-id");
  const previousPriceString = previousPrice.innerText;
  const previousPriceNumber = parseFloat(previousPriceString);
  //  validation
  const button = document.querySelector("#make-purchase");
  if (ProductPrice > 0) {
    button.removeAttribute("disabled");
  }
  // apply button validation -2
  const buttonApply = document.getElementById("apply");

  if (previousPriceNumber > 200) {
    buttonApply.removeAttribute("disabled");
  }
  // set price up
  const currentPrice = previousPriceNumber + ProductPrice;
  const price = (previousPrice.innerText = currentPrice);
  // set total price down
  const totalPricePrevious = document.getElementById("total-id");
  const totalPrice = (totalPricePrevious.innerText = price);
  //   add product in a list
  const parent = document.querySelector("#parent-div");
  const p = document.createElement("p");
  const name = document.getElementById("name-3").innerText;

  const count = parent.childElementCount;
  p.classList = "font-bold";
  p.innerHTML = `
  ${count + 1}. ${name}
  `;
  parent.appendChild(p);
});
// ********************************* card -4
document.getElementById("card-4").addEventListener("click", function () {
  // get card price
  const ProductPrice = getPrice("taka-4");

  // current  price
  const previousPrice = document.getElementById("price-id");
  const previousPriceString = previousPrice.innerText;
  const previousPriceNumber = parseFloat(previousPriceString);
  //  validation
  const button = document.querySelector("#make-purchase");
  if (ProductPrice > 0) {
    button.removeAttribute("disabled");
  }
  // apply button validation -2
  const buttonApply = document.getElementById("apply");

  if (previousPriceNumber > 200) {
    buttonApply.removeAttribute("disabled");
  }
  // set price up
  const currentPrice = previousPriceNumber + ProductPrice;
  const price = (previousPrice.innerText = currentPrice);
  // set total price down
  const totalPricePrevious = document.getElementById("total-id");
  const totalPrice = (totalPricePrevious.innerText = price);
  //   add product in a list
  const parent = document.querySelector("#parent-div");
  const p = document.createElement("p");
  const name = document.getElementById("name-4").innerText;

  const count = parent.childElementCount;
  p.classList = "font-bold";
  p.innerHTML = `
  ${count + 1}. ${name}
  `;
  parent.appendChild(p);
});
// ************************************* card -5
document.getElementById("card-5").addEventListener("click", function () {
  // get card price
  const ProductPrice = getPrice("taka-5");

  // current  price
  const previousPrice = document.getElementById("price-id");
  const previousPriceString = previousPrice.innerText;
  const previousPriceNumber = parseFloat(previousPriceString);
  //  validation
  const button = document.querySelector("#make-purchase");
  if (ProductPrice > 0) {
    button.removeAttribute("disabled");
  }
  // apply button validation -2
  const buttonApply = document.getElementById("apply");

  if (previousPriceNumber > 200) {
    buttonApply.removeAttribute("disabled");
  }
  // set price up
  const currentPrice = previousPriceNumber + ProductPrice;
  const price = (previousPrice.innerText = currentPrice);
  // set total price down
  const totalPricePrevious = document.getElementById("total-id");
  const totalPrice = (totalPricePrevious.innerText = price);
  //   add product in a list
  const parent = document.querySelector("#parent-div");
  const p = document.createElement("p");
  const name = document.getElementById("name-5").innerText;

  const count = parent.childElementCount;
  p.classList = "font-bold";
  p.innerHTML = `
  ${count + 1}. ${name}
  `;
  parent.appendChild(p);
});
// *************************************** card -6
document.getElementById("card-6").addEventListener("click", function () {
  // get card price
  const ProductPrice = getPrice("taka-6");

  // current  price
  const previousPrice = document.getElementById("price-id");
  const previousPriceString = previousPrice.innerText;
  const previousPriceNumber = parseFloat(previousPriceString);
  //  validation -1
  const button = document.querySelector("#make-purchase");
  if (ProductPrice > 0) {
    button.removeAttribute("disabled");
  }
  // apply button validation -2
  const buttonApply = document.getElementById("apply");

  if (previousPriceNumber > 200) {
    buttonApply.removeAttribute("disabled");
  }

  // set price up
  const currentPrice = previousPriceNumber + ProductPrice;
  const price = (previousPrice.innerText = currentPrice);
  // set total price down
  const totalPricePrevious = document.getElementById("total-id");
  const totalPrice = (totalPricePrevious.innerText = price);
  //   add product in a list
  const parent = document.querySelector("#parent-div");
  const p = document.createElement("p");
  const name = document.getElementById("name-6").innerText;

  const count = parent.childElementCount;
  p.classList = "font-bold";
  p.innerHTML = `
  ${count + 1}. ${name}
  `;
  parent.appendChild(p);
});

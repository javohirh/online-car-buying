const cars = [
  {
    id: 1,
    img: "./images/rolls-Royce.jpeg",
    name: "Rolls-Royce",
    price: "Price : 1 M$",
    text: `Rolls-Royce Motor Cars Limited is a British luxury automobile maker
          that has operated as a wholly owned subsidiary of BMW AG since 2003 –
          as the exclusive manufacturer of Rolls-Royce-branded motor cars.`,
  },
  {
    id: 2,
    img: "./images/download.jpeg",
    name: "Lamborghini",
    price: "Price: 400 M$",
    text: "Automobili Lamborghini S.p.A. is an Italian manufacturer of luxury sports cars and SUVs based in Sant'Agata Bolognese. The company is owned by the Volkswagen Group through its subsidiary Audi.",
  },

  {
    id: 3,
    img: "./images/audi.jpeg",
    name: "Audi",
    price: "Price: 100 M$",
    text: "Audi AG is a German automotive manufacturer of luxury vehicles headquartered in Ingolstadt, Bavaria, Germany. A subsidiary of the Volkswagen Group, Audi produces ",
  },
  {
    id: 4,
    img: "./images/laferrari.webp",
    name: "Ferrari",
    price: "Price: 400 M$",
    text: "Ferrari S.p.A. (/fəˈrɑːri/; Italian: [ferˈraːri]) is an Italian luxury sports car manufacturer based in Maranello. Founded in 1939 by Enzo Ferrari (1898–1988), the company built its first car in 1940.",
  },
];

const img = document.querySelector(".person-img");
const carName = document.querySelector(".carName");
const carPrice = document.querySelector(".carPrice");
const info = document.querySelector(".info");

const prevBtn = document.querySelector(".left-arrow");
const nextBtn = document.querySelector(".right-arrow");

let currentItem = 0;

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem >= cars.length) {
    currentItem = 0;
  }
  showCar(currentItem);
});

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = cars.length - 1;
  }
  showCar(currentItem);
});

function showCar(index) {
  const item = cars[index];
  img.src = item.img;
  carName.textContent = item.name;
  carPrice.textContent = item.price;
  info.textContent = item.text;
}

const cartBtn = document.getElementById("cart");
const message = document.querySelector(".notification");
const x = document.querySelector(".fa-x");

console.log(cartBtn, x);
function myFunction() {
  if (message.style.display === "block") {
    message.style.display = "none";
  } else {
    message.style.display = "block";
  }
}

showCar(currentItem);

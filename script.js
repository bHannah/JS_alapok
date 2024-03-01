window.addEventListener("load", function () {
  elemekElerese1();
  elemekElerese2();
  elemekElerese3();
  elemekElerese4();
  elemekFormazasa1();
  esemenyKezeles2();
  esemenyKezeles3();
});

function elemekElerese1() {
  const elsoElem = document.querySelectorAll("#f1")[0];
  cimszoveg = elsoElem.innerHTML;
  console.log(cimszoveg);
}
function elemekElerese2() {
  const masodikElem = document.querySelectorAll("#ide")[0];
  masodikElem.innerHTML += "<p>Jó reggelt!</p>";
}
function elemekElerese3() {
  const harmadikElem = document.querySelectorAll(".ide")[0];
  harmadikElem.innerHTML += "<p>Jó reggelt!</p>";
}

function elemekElerese4() {
  const negyedikElem = document.querySelectorAll(".lista")[0];
  const szamok = [];
  for (let i = 0; i < 5; i++) {
    szam = Math.random();
    szamok[i] = Math.floor(szam * 21 + 10);
  }
  console.log(szamok);
  negyedikElem.innerHTML = "<ul>";
  for (let i = 0; i < 5; i++) {
    negyedikElem.innerHTML += `<li>${szamok[i]}</li>`;
  }
  negyedikElem.innerHTML += "</ul>";
}

function elemekFormazasa1() {
  const otodikElem = document.querySelectorAll(".lista")[0];
  otodikElem.classList.add("formazott");
  console.log("elemek formazasa sikeres.");
  otodikElem.addEventListener("click", esemenyKezeles1);
  function esemenyKezeles1() {
    document.getElementsByClassName("kattintasutan")[0].innerHTML +=
      otodikElem.innerHTML;
  }
}

function esemenyKezeles2() {
  const hatodikElem = document.getElementsByClassName("feladat")[0];
  hatodikElem.innerHTML += "<button>Gomb</button>";
  hatodikElem.addEventListener("click", esemenyKezelese2);
  function esemenyKezelese2() {
    hatodikElem.innerHTML += `<div><img src="kacsa.webp"></div>`;
  }
}

function esemenyKezeles3() {}

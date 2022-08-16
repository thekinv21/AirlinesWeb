// go homepage when click logo//
const goHome = () => {
  window.location.href =
    "http://127.0.0.1:5500/App/Pages/Home/index.html"; /* go to homaPage*/
};

//logOut alert
const loginOut = document.querySelector(".login");
const alertLogout = document.querySelector(".main");
const yesBtn = document.querySelector(".ok");
const noBnt = document.querySelector(".cancel");

const flightButton = document.querySelector(".buy-ticket");

flightButton.addEventListener("click" , goFlight = () => {

  window.location.href = "http://127.0.0.1:5500/App/Pages/Flights/SearchFlight/Flights.html"
})


//LogOut fonk //
loginOut.addEventListener(
  "click",
  (login = () => {
    alertLogout.style.display = "block";

    yesBtn.addEventListener(
      "click",
      (logincik = () => {
        window.location.href =
          "http://127.0.0.1:5500/App/Pages/Login/Login.html";
      })
    );

    noBnt.addEventListener(
      "click",
      (loginkal = () => {
        alertLogout.style.display = "none";
      })
    );
  })
);

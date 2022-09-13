// go homepage when click logo//
const goHome = () => {
  window.location.href =
    "/App/Pages/Home/index.html"; /* go to homaPage*/
};

//logOut alert
const loginOut = document.querySelector(".login");
const alertLogout = document.querySelector(".main");
const yesBtn = document.querySelector(".ok");
const noBnt = document.querySelector(".cancel");

//null alert//

const nullAlert = document.querySelector(".alert-warninng");

//Search Ticket //

const inputPnr = document.getElementById("pnr");
const inputSurname = document.getElementById("surname");
const devamBtn = document.getElementById("devam");

//ticket containeri alıp onun içine block ekleyecem//

const ticketContainer = document.querySelector(".ucak-bilgileri-container");
const ticketDontfound = document.querySelector(".ticket-bulunamadi-container");

devamBtn.addEventListener(
  "click",
  (searchTicket = (e) => {
    e.preventDefault();

    if (inputPnr.value === "" || inputSurname.value === "") {
      nullAlert.style.display = "block";

      setTimeout(() => {
        nullAlert.style.display = "none";
      }, 1500);
    }

    //benim kontrol kod burada başlıyor//
    //ilk önce verileri çek , karşılaştır//
    else {
      let myflightDetails = localStorage.getItem("myTicket");

      myflightDetails = JSON.parse(myflightDetails);

      if (
        inputPnr.value === myflightDetails.ticketPnr &&
        inputSurname.value === myflightDetails.personSurname
      ) {
        //my flight details//
        const personName = document.querySelector(".flight-personName");
        const personSurname = document.querySelector(".flight-personSurname");
        const ticketPnr = document.querySelector(".flight-ticketPnr");
        const flightDate = document.querySelector(".flight-date");
        const flightTime = document.querySelector(".flight-time");
        const flightSeat = document.querySelector(".flight-seat");
        const fromLocation = document.getElementById("fromlocation");
        const fromAirport = document.getElementById("fromairport");
        const tolocation = document.getElementById("tolocation");
        const toAirport = document.getElementById("toairport");
        const partner = document.getElementById("partner");
        const board = document.getElementById("board");
      

        personName.innerText = myflightDetails.personName,
        personSurname.innerText = myflightDetails.personSurname,
        ticketPnr.innerText = myflightDetails.ticketPnr,
        flightDate.innerText = myflightDetails.tarih;
        flightTime.innerText =
          myflightDetails.kalkis_saati +
          " " +
          " / " +
          myflightDetails.inis_saati;
        flightSeat.innerText = myflightDetails.koltuk_numara;
        fromLocation.innerText = myflightDetails.from;
        fromAirport.innerText = myflightDetails.fromairport;
        tolocation.innerText = myflightDetails.to;
        toAirport.innerText = myflightDetails.toairport;
        partner.innerText = myflightDetails.partner;
        board.innerText = myflightDetails.board;

        ticketContainer.style.display = "block";
      } else {
        ticketContainer.style.display = "none";
        ticketDontfound.style.display = "block";

        setTimeout(() => {
          ticketDontfound.style.display = "none";
        }, 2500);
      }
    }

    inputPnr.value = "";
    inputSurname.value = "";
  })
);


//LogOut fonk//

loginOut.addEventListener(
  "click",
  (login = () => {
    alertLogout.style.display = "block";

    yesBtn.addEventListener(
      "click",
      (logincik = () => {
        window.location.href =
          "/App/Pages/Login/Login.html";
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

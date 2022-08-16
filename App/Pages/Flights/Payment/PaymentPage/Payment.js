//my flight details//
const flightDate = document.querySelector(".flight-date");
const flightTime = document.querySelector(".flight-time");
const flightSeat = document.querySelector(".flight-seat");
const fromLocation = document.getElementById("fromlocation");
const fromAirport = document.getElementById("fromairport");
const cizgi = document.querySelector(".cizgi");
const tolocation = document.getElementById("tolocation");
const toAirport = document.getElementById("toairport");
const partner = document.getElementById("partner");
const board = document.getElementById("board");

//show payment container right//
const showPayment = document.querySelector(".right");

//Save and print Ticket Buttons //
const printTicketbtn = document.querySelector(".show");
const saveAllbtn = document.querySelector(".saveAll");

// form input values//
const personName = document.getElementById("name");
const personSurname = document.getElementById("surname");
const personBday = document.getElementById("birthday");
const personGenderRadiobtns = document.querySelectorAll("input[name='gender']");
const personGender = document.getElementById("result");

const personPassportid = document.getElementById("tc");
const personEmail = document.getElementById("email");
const personPhone = document.getElementById("phone");
const personHomePhone = document.getElementById("home-phone");

//ödeme inputları ve butonu//
const pay = document.querySelector(".payment-button");
const kartNumber = document.getElementById("kart-numara");
const kartSonkullanim = document.getElementById("son-kullanim-tarihi");
const kartCvc = document.getElementById("cvc");

//alert onaylama ve iptal ve başarılı alert//
const showWarningalert = document.querySelector(".alert-warninng");
const showalert = document.querySelector(".alert-main");
const onayBtn = document.querySelector(".onay");
const iptalBtn = document.querySelector(".iptal");
const complateAlert = document.querySelector(".alert-complated-ticket");

//when i click printTcket Button//
printTicketbtn.addEventListener(
  "click",
  (show = (event) => {
    event.preventDefault();

    let myflightDetails = localStorage.getItem("Uçagim");

    myflightDetails = JSON.parse(myflightDetails);

    flightDate.innerText = myflightDetails.tarih;
    flightTime.innerText =
      myflightDetails.kalkis_saati + " " + " / " + myflightDetails.inis_saati;
    flightSeat.innerText = myflightDetails.koltuk_numara;
    fromLocation.innerText = myflightDetails.from;
    fromAirport.innerText = myflightDetails.fromairport;
    cizgi.style.display = "block";
    tolocation.innerText = myflightDetails.to;
    toAirport.innerText = myflightDetails.toairport;
    partner.innerText = myflightDetails.partner;
    board.innerText = myflightDetails.board;
  })
);

//when i click saveAllbtn Button//
saveAllbtn.addEventListener(
  "click",
  (saveİnfo = (e) => {
    e.preventDefault();

    //radiobuttonda direkt value alma şansımız yok bu yüzden bu yöntemi kullanmalıyız//

    for (let i = 0; i < personGenderRadiobtns.length; i++) {
      if (personGenderRadiobtns[i].checked) {
        personGender.value = personGenderRadiobtns[i].value;
      }
    }

    if (
      personName.value === "" ||
      personSurname.value === "" ||
      personBday.value === "" ||
      personPassportid.value === "" ||
      personEmail.value === "" ||
      personPhone.value === ""
    ) {
      showWarningalert.style.display = "block";

      setTimeout(() => {
        showWarningalert.style.display = "none";
      }, 1500);
    } else {
      //Payment showing when i click button//
      showPayment.style.display = "block";

      pay.addEventListener(
        "click",
        (Payment = (e) => {
          e.preventDefault();

          if (
            kartNumber.value === "" ||
            kartSonkullanim.value === "" ||
            kartCvc.value === ""
          ) {
            showWarningalert.style.display = "block";

            setTimeout(() => {
              showWarningalert.style.display = "none";
            }, 1500);
          } else {
            showalert.style.display = "block";

            onayBtn.addEventListener(
              "click",
              (Onayla = () => {
                //Buradan verileri çekip baştan PersonName vb bilgileri ekleyip geri Localestorage ekleyelim//

                let Ticket = localStorage.getItem("Uçagim");
                Ticket = JSON.parse(Ticket);

                //Create ranom pnr  and send for email//
                function makeid() {
                  var text = "";
                  var possible =
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

                  for (var i = 0; i < 5; i++)
                    text += possible.charAt(
                      Math.floor(Math.random() * possible.length)
                    );

                  return text;
                }

                const myPnr = makeid();

                let myTicket = {
                  personName: personName.value,
                  personSurname: personSurname.value,
                  personGender: personGender.value,
                  personEmail: personEmail.value,
                  personPhone: personPhone.value,
                  ticketPnr: myPnr,
                  from: Ticket.from,
                  fromairport: Ticket.fromairport,
                  to: Ticket.to,
                  toairport: Ticket.toairport,
                  tarih: Ticket.tarih,
                  kalkis_saati: Ticket.kalkis_saati,
                  inis_saati: Ticket.inis_saati,
                  fiyat: Ticket.fiyat,
                  partner: Ticket.partner,
                  board: Ticket.board,
                  ticket_icon: Ticket.ticket_icon,
                  koltuk_numara: Ticket.koltuk_numara,
                };

                localStorage.setItem("myTicket", JSON.stringify(myTicket));

                window.location.href =
                  "http://127.0.0.1:5500/App/Pages/Flights/Payment/PaymentComplate/Complate.html";
              })
            );

            iptalBtn.addEventListener(
              "click",
              (İptal = () => {
                showalert.style.display = "none";
              })
            );
          }
        })
      );
    }
  })
);

const sendBtn = document.getElementById("sendEmail");

sendBtn.addEventListener(
  "click",
  (sendEmail = () => {
    //localestoragedan verileri çektim ve on agöre mesaj yolladım//
    let myFlightinfo = localStorage.getItem("myTicket");
    myFlightinfo = JSON.parse(myFlightinfo);


    //mail ile gönderilecek bilgiler//
    let sendinfo = {
      to_email: myFlightinfo.personEmail,
      from_name: myFlightinfo.partner,
      to_name: myFlightinfo.personName,
      from_location: myFlightinfo.from,
      to_location: myFlightinfo.to,
      from_airport: myFlightinfo.fromairport,
      to_airport: myFlightinfo.toairport,
      flight_date: myFlightinfo.tarih,
      flight_kalkis_saati: myFlightinfo.kalkis_saati,
      flight_inis_saati: myFlightinfo.inis_saati,
      flight_seat: myFlightinfo.koltuk_numara,
      ticket_pnr : myFlightinfo.ticketPnr,
      flight_message:
        myFlightinfo.partner +
        " " +
        "Ailesi Size ve Ailenize iyi Uçuşlar Diler",
    };

    
    //mail gönderme fonksyonu//

    emailjs
      .send("airline_message", "template_v5gvs97", sendinfo)
      .then(function (res) {
        window.location.href = "/App/Pages/Home/index.html";
      });
  })
);

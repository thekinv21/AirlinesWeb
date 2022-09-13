const seatContainer = document.querySelector(".cabin");
const seatNumber = document.querySelectorAll(".seat");
const confirmBtn = document.querySelector(".confirm-btn");
const showModalwindow = document.querySelector(".main");
const evetBtn = document.querySelector(".ok");
const hayirBtn = document.querySelector(".cancel");

seatContainer.addEventListener(
  "click",
  (selectSeat = (e) => {
    e.preventDefault();

    if (
      e.target.classList.contains("seats-form") &&
      !e.target.classList.contains("reserved")
    ) {
      e.target.classList.toggle("selected"); // seçer eğer seçili ise siler //

      let selectedSeatCount = seatContainer.querySelectorAll(
        ".seats-form.selected"
      ).length;

      let choiceSeat = e.target.innerText; // Seçilen koltuk bilgisi //

      confirmBtn.addEventListener(
        "click",
        (Confirm = () => {
          showModalwindow.style.display = "block";

          evetBtn.addEventListener(
            "click",
            (Evet = () => {
              //Locale storageden veileri çektim//
              //Koltuk seçtim ve onun bilgisini genel verilere ekledim//
              //Geri locale storaga ekledim Pnr ile sorgulama yapabilmek için//

              let Bilgilerim = localStorage.getItem("UçakBilgilerim");
              Bilgilerim = JSON.parse(Bilgilerim);

              let UcakFullBiligilerim = {
                from: Bilgilerim.from,
                fromairport: Bilgilerim.fromairport,
                to: Bilgilerim.to,
                toairport: Bilgilerim.toairport,
                tarih: Bilgilerim.tarih,
                kalkis_saati: Bilgilerim.kalkis_saati,
                inis_saati: Bilgilerim.inis_saati,
                fiyat: Bilgilerim.fiyat,
                partner: Bilgilerim.partner,
                board: Bilgilerim.board,
                ticket_icon: Bilgilerim.ticket_icon,
                koltuk_numara: choiceSeat,
              };

              localStorage.setItem(
                "Uçagim",
                JSON.stringify(UcakFullBiligilerim)
              );

              window.location.href =
                "/App/Pages/Flights/Payment/PaymentPage/Payment.html";
            })
          );

          hayirBtn.addEventListener(
            "click",
            (Hayir = () => {
              showModalwindow.style.display = "none";
            })
          );

          selectedSeatCount.value = "";
          choiceSeat.value = "";
        })
      );
    }
  })
);

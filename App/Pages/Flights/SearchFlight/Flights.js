const goHome = () => {
  window.location.href =
    "/App/Pages/Home/index.html"; /* go to homaPage*/
};

const AracKirala = () => {
  window.location.href =
    "https://www.grscar.com/atasehir-arac-kiralama?gclid=CjwKCAjwi8iXBhBeEiwAKbUofS3MyvAc4EhdmgyrJVDbuC2QuXlhvdFHvU8dAfmHHQDSqyYz2JkI-hoCsOYQAvD_BwE";
};

const hotelBul = () => {
  window.location.href =
    "https://www.kayak.com/Istanbul-Hotels.3430.hotel.ksp?r9ck=iq&gclid=CjwKCAjwi8iXBhBeEiwAKbUofX_fX7CJc4AD2AXtoD2na4X75-r70kAeGoqOW5xSq1LNxaoqP3a1bxoCRIcQAvD_BwE";
};

const turkisAirline = () => {
  window.location.href =
    "https://www.cheapoair.com/flights/booknow/airlines?airline-code=tk&fpaffiliate=coa-google-global&fpsub=&utm_campaign=airlines_exact_atlas_global&utm_term=turkish%20airlines&utm_term_id=kwd-48195210&utm_source={google}&utm_medium={cpc}&device=c&fpprice=&campaignID=14135831175&adgroupId=129371135230&gclid=CjwKCAjwi8iXBhBeEiwAKbUofcJh_vD2LvYs1en0ysBU_orbTMCO5H5PneHwkdZry6Oy-ZqIAD2RdxoCre4QAvD_BwE";
};

const pegasus = () => {
  window.location.href =
    "https://www.flypgs.com/?gclid=CjwKCAjwi8iXBhBeEiwAKbUofSRG5igZEI6y9np3YOaHALnoP5F5JsQCjR6urdB7aJcobt20foRSdhoCk88QAvD_BwE&gclsrc=aw.ds";
};

const anadoluJett = () => {
  window.location.href =
    "https://www.bilet.com/ucak-bileti/anadolujet?gclid=CjwKCAjwi8iXBhBeEiwAKbUofegPDK5jj4_rsPj30H8SS5TKFVuNGWvm5C5wVc7hXxn2ODIznaB9mhoCHrUQAvD_BwE";
};

//--------------flight inputs----------------------//
const fromİnput = document.getElementById("nereden");
const toİnput = document.getElementById("nereye");
const flightDate = document.getElementById("tarih");
const searchBtn = document.querySelector(".searchButton");
const block = document.querySelector(".homeContainer");
const showTickets = document.querySelector(".tickets");

//---------------- alerts  --------------------- //
const alertWarning = document.querySelector(".alert");
const loginOut = document.querySelector(".login");
const alertLogout = document.querySelector(".main");
const yesBtn = document.querySelector(".ok");
const noBnt = document.querySelector(".cancel");

//--------------LogOut Fonk---------------///

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

//search butona basıldıgında gerçekleşecek eventlar//

searchBtn.addEventListener(
  "click",
  (seacrhFlights = () => {
    if (fromİnput.value === "" && toİnput.value === "") {
      alertWarning.style.display = "block";

      setTimeout(() => {
        alertWarning.style.display = "none";
      }, 2500);
    } else {
      /* DatajSondan verileri çektim*/
      fetch("/App/Pages/Flights/Database/Data.json")
        .then((response) => {
          return response.json(); /* Json Olarak döndürdüm*/
        })
        .then((veriJson) => {
          const eslesenler = []; /* Eşleşenleri bu diziye atacaz*/

          veriJson.FlightData.forEach((element) => {
            /* döngü ile datalara eriştim */
            if (element.from === fromİnput.value) {
              if (element.to === toİnput.value) {
                if (element.tarih === flightDate.value) {
                  eslesenler.push(element);
                }
              }
            }
          });

          block.style.display = "none";

          const divContainer = document.createElement("div");
          divContainer.classList.add("flights");
          showTickets.appendChild(divContainer);

          const headerTitle = document.querySelector("h1");
          headerTitle.classList.add("headerTitle");
          headerTitle.innerText = "Tickets Details";
          divContainer.appendChild(headerTitle);

          const ulContainer = document.createElement("ul");
          ulContainer.classList.add("ul");

          eslesenler.map((sefer) => {
            const liContainer = document.createElement("li");
            liContainer.setAttribute("key", sefer.id);

            const divUlcontainer = document.createElement("div");
            divUlcontainer.classList.add("ulContainer");
            const div1 = document.createElement("div");
            const Airlinelogo = document.createElement("img");
            Airlinelogo.classList.add("flaticon");
            Airlinelogo.setAttribute("src", sefer.icon);
            div1.appendChild(Airlinelogo);
            divUlcontainer.appendChild(div1);

            const div2 = document.createElement("div");
            div2.classList.add("articles");
            const p1 = document.createElement("p");
            p1.classList.add("p-title");
            p1.innerText = sefer.from;
            const p2 = document.createElement("p");
            p2.innerText = sefer.fromairport;
            div2.appendChild(p1);
            div2.appendChild(p2);
            divUlcontainer.appendChild(div2);

            const div3 = document.createElement("div");
            const p = document.createElement("p");
            p.classList.add("cizgi");
            p.innerText = "Direkt Uçuş";
            div3.appendChild(p);
            divUlcontainer.appendChild(div3);

            const div4 = document.createElement("div");
            div4.classList.add("articles");
            const p4 = document.createElement("p");
            p4.classList.add("p-title");
            p4.innerText = sefer.to;
            const p5 = document.createElement("p");
            p5.classList.add("articles");
            p5.innerText = sefer.toairport;
            div4.appendChild(p4);
            div4.appendChild(p5);
            divUlcontainer.appendChild(div4);

            const div5 = document.createElement("div");
            div4.classList.add("articles");
            const p6 = document.createElement("p");
            p6.classList.add("p-title");
            p6.innerText = sefer.tarih;
            const p7 = document.createElement("p");
            p7.classList.add("articles");
            p7.innerText =
              sefer.kalkis_saati + " " + "/" + " " + sefer.inis_saati;
            div5.appendChild(p6);
            div5.appendChild(p7);
            divUlcontainer.appendChild(div5);

            const div6 = document.createElement("div");
            const secButton = document.createElement("button");
            secButton.classList.add("fiyat_btn");
            secButton.innerText = sefer.fiyat;
            div6.appendChild(secButton);

            /* Satin al butonuna basıldıgında gerçekleşecek olan eventlar*/
            secButton.addEventListener(
              "click",
              (satinAl = (e) => {
                // Uçak Bilgilerim kısmı //

                const UcakBilgilerim = {
                  from: sefer.from,
                  fromairport: sefer.fromairport,
                  to: sefer.to,
                  toairport: sefer.toairport,
                  tarih: sefer.tarih,
                  kalkis_saati: sefer.kalkis_saati,
                  inis_saati: sefer.inis_saati,
                  fiyat: sefer.fiyat,
                  ticket_icon: sefer.ticket_icon,
                  partner: sefer.partner,
                  board: sefer.board,
                };

                localStorage.setItem(
                  "UçakBilgilerim",
                  JSON.stringify(UcakBilgilerim)
                );

                window.location.href =
                  "/App/Pages/Flights/SelectSeat/SelectSeat.html";
              })
            );

            divUlcontainer.appendChild(div6);
            liContainer.appendChild(divUlcontainer);
            ulContainer.appendChild(liContainer);
          });

          divContainer.appendChild(ulContainer);
          fromİnput.value = "";
          toİnput.value = "";
          flightDate.value = "";
        });
    }
  })
);

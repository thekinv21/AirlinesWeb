//logOut alert//
const loginOut = document.querySelector(".login");
const alertLogout = document.querySelector(".main");
const yesBtn = document.querySelector(".ok");
const noBnt = document.querySelector(".cancel");

loginOut.addEventListener(
  "click",
  (login = () => {
    alertLogout.style.display = "block";

    yesBtn.addEventListener(
      "click",
      (logincik = () => {
        
        window.location.href = "/App/Pages/Login/Login.html"

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

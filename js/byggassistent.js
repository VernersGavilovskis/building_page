const loginBtn = document.getElementsByClassName("login-nav") [0];
const popup = document.getElementsByClassName("modal-wrapper") [0];
const backbtn = document.getElementsByClassName("login-nav") [1];



loginBtn.addEventListener("click", function() {
    popup.style.display = "flex";
    loginBtn.style.display = "none";
    backbtn.style.display = "flex";
});

backbtn.addEventListener("click", function(){
    backbtn.style.display= "none";
    loginBtn.style.display = "flex";
});

window.addEventListener("click", function(event) {
    if (event.target == popup) {
      popup.style.display = "none";
      backbtn.style.display = "none";
      loginBtn.style.display = "flex";
    }
  });


const header = document.getElementById("header"), scrollThreshold = 30;
 function toggleHeaderClass() {
     window.scrollY > 30 ? $("#header").css({ "box-shadow": "rgb(228 225 225 / 40%) 0px 4px 4px" }) : $("#header").css({ "box-shadow": "none" }) }
      window.addEventListener("scroll", toggleHeaderClass), window.addEventListener("resize", toggleHeaderClass), toggleHeaderClass();
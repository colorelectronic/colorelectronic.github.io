var localStorage = window.localStorage;
var defaultLang = "bos";
var phrases = {
eng: {
    projektnoRazvojneUsluge: "PROJECT DEVELOPMENT SERVICES",

},
ger: {
    projektnoRazvojneUsluge: "PROJEKTENTWICKLUNGSDIENSTLEISTUNGEN",
},
bos: {
    projektnoRazvojneUsluge: "PROJETKNO RAZVOJNE USLUGE",
}
};

function changeLanguage(language){
var uslugeTitle = document.getElementById("uslugeTitle");
uslugeTitle.innerHTML = phrases[language].projektnoRazvojneUsluge;
localStorage.setItem("lang", language);
};
var engButton = document.getElementById("eng");
engButton.onclick = function(){
    var language = this.id;
    console.log(language);
    changeLanguage(language);
};
var gerButton = document.getElementById("ger");
gerButton.onclick = function(){
    var language = this.id;
    console.log(language);
    changeLanguage(language);
};
var bosButton = document.getElementById("bos");
bosButton.onclick = function(){
    var language = this.id;
    console.log(language);
    changeLanguage(language);
};

changeLanguage(localStorage.getItem("lang")||defaultLang);



var localStorage = window.localStorage;
var defaultLang = "bos";
var phrases = {
    eng: {
        projektnoRazvojneUsluge: "PROJECT DEVELOPMENT SERVICES",
        indexTitle: "Color Electronic d.o.o. company was founded in 2010 in Kiseljak not far from Tuzla. It started as a family business in the field of machines, electronics and electricity. Many years of experience and quality work have contributed to the expansion of Color Electronic in 2019 activities and business, becomes a recognizable manufacturer of mechanical engineering with a new center in Lukavac. <br> In 2020, Color Electronic reported as one of the fastest growing companies in BiH and proudly carries a Business Advance Certificate issued by Unknown.<br><br>",

    },
    ger: {
        indexTitle: "Color Electronic d.o.o. Das Unternehmen wurde 2010 in Kiseljak gegründet nicht weit von Tuzla. Es begann als Familienunternehmen im Bereich Maschinen, Elektronik und Elektrizität. Langjährige Erfahrung und Qualitätsarbeit haben dazu beigetragen, dass Color Electronic seine Reichweite im Jahr 2019 erweitert hatAktivitäten und Geschäft, wird ein erkennbarer Hersteller von Maschinenbau mit einem neuen Zentrum inGerissen.<br> Im Jahr 2020 meldete Color Electronic eines der am schnellsten wachsenden Unternehmen in Bosnien und Herzegowina und ist stolz daraufträgt ein Business Advance Certificate von Unknown.<br> <br>",
    },
    bos: {
        indexTitle: "Color Electronic d.o.o. kompanija je osnovana 2010. godine u mjestu Kiselja nedaleko od Tuzle. Svoje djelovanje započinje kao porodični biznis u branši mašinstva, elektronike i elektrike. Dugogodišnje iskustvo i kvalitetan rad doprinosi da u 2019. godini Color Electronic proširuje svoje djelatnosti i poslovanje, te postaje prepoznatljiva Machine Building kompanija sa novim središtem u Lukavcu. < br > U 2020. godini Color Electronic poprima titulu jedne od najbrže rastućih kompanija u BiH i ponosan je nosilac Certifikata za prosperitetno poslovanje izdan od strane Unknown. < br >  <br>",
        projektnoRazvojneUsluge: "PROJETKNO RAZVOJNE USLUGE",
    }
};

function changeLanguage(language) {
    var indexH1 = document.getElementById("indexTitleP");
    indexTitleP.innerHTML = phrases[language].indexTitle;
    localStorage.setItem("lang", language);
};


var engButton = document.getElementById("eng");
engButton.onclick = function () {
    var language = this.id;
    console.log(language);
    changeLanguage(language);
};
var gerButton = document.getElementById("ger");
gerButton.onclick = function () {
    var language = this.id;
    console.log(language);
    changeLanguage(language);
};
var bosButton = document.getElementById("bos");
bosButton.onclick = function () {
    var language = this.id;
    console.log(language);
    changeLanguage(language);
};

changeLanguage(localStorage.getItem("lang") || defaultLang);



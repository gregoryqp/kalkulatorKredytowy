
   
   let sliderEl = document.querySelector("#rangeAmount");
let sliderValue = document.querySelector(".requestedAmountValue");
let monthlyRate = document.querySelector(".monthlyRate");
let sliderValueAtribute = sliderEl.getAttribute("value");
let sliderPeriod = document.querySelector("#rangePeriod");
let sliderValue2 = document.querySelector(".periodRepayment");
let currencyInMonRate = document.querySelector(".currencyInMonthlyRate");
let wnioskowanaKwota = document.querySelector(".amountRequested");
let amountToPayout = document.querySelector(".amountToPayout");
let calkowityKoszt = document.querySelector(".totalCreditCost");
let koszt;

sliderValue.innerHTML = sliderValueAtribute;
wnioskowanaKwota.innerHTML = amountToPayout.innerHTML =
  sliderValueAtribute + " zł";

let progress = (sliderValueAtribute / sliderEl.max) * 100;

sliderEl.style.background = `linear-gradient(to right, #44a844 ${progress}%, #d1d1d1 ${progress}%)`;

let sliderPeriodRepayment = sliderPeriod.getAttribute("value");
sliderValue2.innerHTML = sliderPeriodRepayment;

let progressPeriod = (sliderPeriodRepayment / sliderPeriod.max) * 100;

sliderPeriod.style.background = `linear-gradient(to right, #44a844 ${progressPeriod}%, #d1d1d1 ${progressPeriod}%)`;


// let ratyStale = document.querySelector(".checkbox");
// let ratyMalejace = document.querySelector(".checked")

// let zmianaKoloru = () =>{

//   ratyMalejace.classList.remove("checked");
//   ratyStale.classList.add("checked");
// };

// let zmianaKoloru2 = () => {
// ratyStale.classList.remove("checked");
// ratyMalejace.classList.add("checked");
// }

// ratyStale.addEventListener("click", zmianaKoloru);
// ratyMalejace.addEventListener("click", zmianaKoloru2);


  function calcInstallment() {
    let annualProvision = sliderValueAtribute * 0.09;
  
    let monthlyProvision = annualProvision / 12;
  
    let rateCapital = sliderValueAtribute / sliderPeriodRepayment;
  
    let fullRate = monthlyProvision + rateCapital;
  
    koszt = monthlyProvision * sliderPeriodRepayment;
  
    calkowityKoszt.innerHTML = Math.round(koszt) + " zł";
  
    monthlyRate.innerHTML = Math.round(fullRate) + " zł";
  }


  function calcInstallment2() {
    let annualProvision = sliderValueAtribute * 0.05;
  
    let monthlyProvision = annualProvision / 12;
  
    let rateCapital = sliderValueAtribute / sliderPeriodRepayment;
  
    let fullRate = monthlyProvision + rateCapital;
  
    koszt = monthlyProvision * sliderPeriodRepayment;
  
    calkowityKoszt.innerHTML = Math.round(koszt) + " zł";
  
    monthlyRate.innerHTML = Math.round(fullRate) + " zł";
  }




sliderEl.addEventListener("input", (event) => {
  sliderValueAtribute = event.target.value;
  sliderValue.innerHTML = sliderValueAtribute;
  wnioskowanaKwota.innerHTML = amountToPayout.innerHTML =
    sliderValueAtribute + " zł";

    if(ratyMalejace.classList.contains("checked")){
      calcInstallment();
    }else{
      calcInstallment2();
    }
  

  let progress = (sliderValueAtribute / sliderEl.max) * 100;

  sliderEl.style.background = `linear-gradient(to right, #44a844 ${progress}%, #d1d1d1 ${progress}%)`;
});


sliderPeriod.addEventListener("input", (event) => {
  sliderPeriodRepayment = event.target.value;
  sliderValue2.innerHTML = sliderPeriodRepayment;

  if(ratyMalejace.classList.contains("checked")){
    calcInstallment();
  }else{
    calcInstallment2();
  }

  let progress = (sliderPeriodRepayment / sliderPeriod.max) * 100;

  sliderPeriod.style.background = `linear-gradient(to right, #44a844 ${progress}%, #d1d1d1 ${progress}%)`;
});

let ratyStale = document.querySelector(".checkbox");
let ratyMalejace = document.querySelector(".checked")

let zmianaKoloru = () =>{

  ratyMalejace.classList.remove("checked");
  ratyStale.classList.add("checked");
  calcInstallment2();
};

let zmianaKoloru2 = () => {
ratyStale.classList.remove("checked");
ratyMalejace.classList.add("checked");
calcInstallment();
}

ratyStale.addEventListener("click", zmianaKoloru);
ratyMalejace.addEventListener("click", zmianaKoloru2);

let rozwiniety = document.querySelector(".legalInformation2");
let rozwinButton = document.querySelector(".expand");

let expandButton = () => {
  let activateComponent = document.querySelector(".legalInformation1");

  activateComponent.classList.remove("legalInformation1");
  activateComponent.classList.add("legalInformation2");
  rozwiniety.classList.remove("legalInformation2");
  rozwiniety.classList.add("legalInformation1");
};

rozwinButton.addEventListener("click", expandButton);

let zwinButton = document.querySelector(".collapse");

let collapseButton = () => {
  let activeComponent = document.querySelector(".legalInformation1");
  let rozw = document.querySelector(".legalInformation2");

  activeComponent.classList.remove("legalInformation1");
  activeComponent.classList.add("legalInformation2");
  rozw.classList.remove("legalInformation2");
  rozw.classList.add("legalInformation1");
};

zwinButton.addEventListener("click", collapseButton);


let print = document.querySelector(".download");

function generatePDF(){
  const {jsPDF} = window.jspdf;
  let doc = new jsPDF();
  let logo = new Image();
   logo.src = "logo.PNG";
  doc.addImage(logo, 'PNG', 10, 10, 100, 20);
  doc.setFontSize(12);
  
  doc.text(50, 60, "Harmonogram spłat kredytu");
  doc.text(10, 90, "Wnioskowana kwota: " + wnioskowanaKwota.innerHTML)
  doc.text(10, 100, "Kwota do wypłaty: " + amountToPayout.innerHTML);
  doc.text(10, 110, "Miesięczna rata: " + monthlyRate.innerHTML);
 
  doc.save("Harmonogram.pdf");
}

print.addEventListener("click", generatePDF);








// alert("Checkboxy jeszcze nie są skończone. Muszę dodać wzory do obliczania rat stałych i zmiennych")
 

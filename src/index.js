function showTime (){
    let caracasTime = moment()
    .tz("America/Caracas")
    .format("HH:mm:ss");
    let caracasTimeE = document.querySelector(".caracas-time");
    let limaTime = moment()
    .tz("America/Lima")
    .format("HH:mm:ss");
    let limaTimeE = document.querySelector(".lima-time");
    let oportoTime = moment()
    .tz("Portugal")
    .format("HH:mm:ss");
    let oportoTimeE = document.querySelector(".oporto-time");
    let madridTime = moment()
    .tz("Europe/Madrid")
    .format("HH:mm:ss");
    let madridTimeE = document.querySelector(".madrid-time");
    let aucklandTime = moment()
    .tz("Pacific/Auckland")
    .format("HH:mm:ss");
    let aucklandTimeE = document.querySelector(".auckland-time");
    let tokyoTime = moment()
    .tz("Asia/Tokyo")
    .format("HH:mm:ss");
    let tokyoTimeE = document.querySelector(".tokyo-time");

    caracasTimeE.innerHTML = caracasTime;
    limaTimeE.innerHTML = limaTime;
    oportoTimeE.innerHTML = oportoTime;
    madridTimeE.innerHTML = madridTime;
    aucklandTimeE.innerHTML = aucklandTime;
    tokyoTimeE.innerHTML = tokyoTime;
}

function showDate (){
    let caracasDay = moment()
    .tz("America/Caracas")
    .format("dddd, D MMMM, YYYY");
    let caracasDayE = document.querySelector(".caracas-day");
    let limaDay = moment()
    .tz("America/Lima")
    .format("dddd, D MMMM, YYYY");
    let limaDayE = document.querySelector(".lima-day");
    let oportoDay = moment()
    .tz("Portugal")
    .format("dddd, D MMMM, YYYY");
    let oportoDayE = document.querySelector(".oporto-day");
    let madridDay = moment()
    .tz("Europe/Madrid")
    .format("dddd, D MMMM, YYYY");
    let madridDayE = document.querySelector(".madrid-day");
    let aucklandDay = moment()
    .tz("Pacific/Auckland")
    .format("dddd, D MMMM, YYYY");
    let aucklandDayE = document.querySelector(".auckland-day");
    let tokyoDay = moment()
    .tz("Asia/Tokyo")
    .format("dddd, D MMMM, YYYY");
    let tokyoDayE = document.querySelector(".tokyo-day");

    caracasDayE.innerHTML = caracasDay;
    limaDayE.innerHTML = limaDay;
    oportoDayE.innerHTML = oportoDay;
    madridDayE.innerHTML = madridDay;
    aucklandDayE.innerHTML = aucklandDay;
    tokyoDayE.innerHTML = tokyoDay;

}

function showSelectedCity (event){
    if (event.target.value.length > 0) {
        let selectedCityTime = moment()
          .tz(event.target.value)
          .format("HH:mm:ss");
        let selectedCityDay =
        moment()
          .tz(event.target.value)
          .format("dddd, D MMMM, YYYY");
          let newDivE = document.querySelector(".all-time-zones");
          let selectedIndex = event.target.selectedIndex;
          let selectedText = event.target.options[selectedIndex].text;
    newDivE.innerHTML=`<div class="selected-city-data">
      <p class="selected-city">🕓${selectedText}</p>
      <p class="selected-city-time">${selectedCityTime}</p>
      <p class="selected-city-day">${selectedCityDay}</p>
    </div>`
        }else{
            location.reload();
        }
    
    }

    let citySelected = document.querySelector("#city");
    citySelected.addEventListener("change", showSelectedCity);

setTimeout(showTime,0);
setTimeout(showDate,0);
setInterval (showTime,1000);
setInterval (showDate,1000*60);
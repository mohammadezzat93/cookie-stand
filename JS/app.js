'use strict';

let hours = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm'];

//  random : method create random number
function random(min, max){ 
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}
  
let locationsArray = [];

function locations(name, minCustomer, maxCustomer, avgCookies) {

    this.name = name;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.avgCookies = avgCookies;

    this.totalcookiesperday = 0;
    this.customerperHour = [];
    this.cookiesperHour = [];

    locationsArray.push(this);

}

//    method creat outside constructor

locations.prototype.calcustomerperhour = function () {
    for (let i = 0; i < hours.length; i++) {
        this.customerperHour.push(random(this.minCustomer, this.maxCustomer));
    }
    
}

locations.prototype.calcookiesperHour = function () {
    for (let i = 0; i < hours.length; i++) {
        this.cookiesperHour.push(Math.floor(this.avgCookies * this.customerperHour[i] ));

        this.totalcookiesperday += this.cookiesperHour[i];
    }
}

//    creat object

let seattle =new locations('seattle', 23, 65, 6.3);
let tokyo =new locations('Tokyo', 3, 24, 1.2);
let dubai =new locations('dubai', 11, 38, 3.7);
let paris =new locations('paris', 20, 38, 2.3);
let lima =new locations('lima', 2, 16, 4.6);

// tokyo.calcustomerperhour();
// tokyo.calcookiesperHour();

// console.log(tokyo);


// getting the parent from html
let parent = document.getElementById('parent');
console.log(parent);

// creat Table
let table = document.createElement('table');
parent.appendChild(table);


//        *** header Function ***

function makeHeader() {

    //  heaerRow
    let trElement1 = document.createElement('tr');
    table.appendChild(trElement1);

    // creat first th : Name
    let firstTh = document.createElement('th');
    trElement1.appendChild(firstTh);
    firstTh.textContent = 'Name';

    // =========================

    // creat Hour TH
    for (let i = 0; i < hours.length; i++) {
        let hourTh = document.createElement('th');

        trElement1.appendChild(hourTh);
        hourTh.textContent = hours[i];
    }

    // =========================

    // creat last th : Daily Location Total
    let lastTh = document.createElement('th');
    trElement1.appendChild(lastTh);
    lastTh.textContent = 'Daily Location Total';

}

//         *** render method ***

locations.prototype.render = function () {

    //  dataRow
    let trElement2 = document.createElement('tr');
    table.appendChild(trElement2);

    // creat first td : Name
    let tdName = document.createElement('td');
    trElement2.appendChild(tdName);
    tdName.textContent = this.name;

    // =============================

    // creat td : Data
    for (let i = 0; i < hours.length; i++) {

        let tdData = document.createElement('td');
        trElement2.appendChild(tdData);
        tdData.textContent = this.cookiesperHour[i];
    }

    // =============================

    // creat td : TotalData
    let tdTotal = document.createElement('td');
    trElement2.appendChild(tdTotal);
    tdTotal.textContent = this.totalcookiesperday;
}


//     *** footer function ***

function makeFooter() {

    //  footerRow
    let trElement3 = document.createElement('tr');
    table.appendChild(trElement3);

    // creat first Total TH : Total
    let footTH = document.createElement('th');
    trElement3.appendChild(footTH);
    footTH.textContent = 'Total';

    // =============================

    // creat th Footer : TotalData

    let totalFinally = 0;

    for (let i = 0; i < hours.length; i++) {

        let totalperHour = 0;

        for (let j = 0; j < locationsArray.length; j++) {

            //  totalData
            totalperHour += locationsArray[j].cookiesperHour[i];

            // TotalTotals
            totalFinally += locationsArray[j].cookiesperHour[i];

        }

        let tdTotalFooter = document.createElement('th');
        trElement3.appendChild(tdTotalFooter);
        tdTotalFooter.textContent = totalperHour;
    }

    // =============================

    // creat th : Data Total Final
    let thFinalTotal = document.createElement('th');
    trElement3.appendChild(thFinalTotal);
    thFinalTotal.textContent = totalFinally;
}

//          *** add more locations ***

let form = document.getElementById('form');

form.addEventListener('submit', submitt);

function submitt(event){

  event.preventDefault();

  let name = event.target.name.value;
  let minCustomer = parseInt( event.target.min.value);
  let maxCustomer =parseInt( event.target.max.value);
  let avgCookies =parseFloat( event.target.avg.value);

  let addedShop = new locations (name, minCustomer, maxCustomer, avgCookies);


  table.textContent = "";
  console.log(addedShop);

  addedShop.calcustomerperhour();
  addedShop.calcookiesperHour();

makeHeader();

for (let i = 0; i < locationsArray.length; i++) {
    locationsArray[i].render();
}

makeFooter();

}

//  call method

makeHeader();

for (let i = 0; i < locationsArray.length; i++) {

    locationsArray[i].calcustomerperhour();
    locationsArray[i].calcookiesperHour();
    locationsArray[i].render();
    // console.log(locationsArray[i]);
}

makeFooter();
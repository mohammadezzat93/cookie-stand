'use strict';

//Global Variable - Store hours

let hours = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm'];

//Global Variable - Store Locations Array 
let storeLocations = [];

//Get Sales Data Table from sales.html
let salmonTable = document.getElementById('salmonTable');

//Store constructor
function Store(name, minCustomers, maxCustomers, avgCookies) {

  //Properties
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;

  //Arrays
  this.averageCustomersPerHour = [];
  this.averageCookiesPerHour = [];
  this.totalCookiesPerDay = 0;

  //Methods
  this.numOfCustomersPerHour();
  this.cookiesPerCustomer();

  //Push the created instance to the storeLocations array
  storeLocations.push(this);
}

Store.prototype.numOfCustomersPerHour = function () {
  for (let i = 0; i < hours.length; i++) {
    let singleHourCustomers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
    this.averageCustomersPerHour.push(singleHourCustomers);
  }
};

Store.prototype.cookiesPerCustomer = function () {
  for (let i = 0; i < hours.length; i++) {
    let singleHourCookies = Math.ceil(this.averageCustomersPerHour[i] * this.avgCookies);
    this.averageCookiesPerHour.push(singleHourCookies);
    this.totalCookiesPerDay += singleHourCookies;
  }
};

Store.prototype.render = function () {

  let trRowName = document.createElement('tr');
  let tdStore = document.createElement('th');
  tdStore.textContent = this.name;
  trRowName.appendChild(tdStore);

  for (let i = 0; i < this.averageCookiesPerHour.length; i++) {
    let tdCell = document.createElement('td');
    tdCell.textContent = this.averageCookiesPerHour[i];
    trRowName.appendChild(tdCell);
  }

  let tdTotal = document.createElement('td');
  tdTotal.textContent = this.totalCookiesPerDay;
  trRowName.appendChild(tdTotal);
  salmonTable.appendChild(trRowName);
};

//Table creation functions

function makeHeaderRow() {
  let tableRow = document.createElement('tr');
  let thElement = document.createElement('th');
  thElement.textContent = '';
  salmonTable.appendChild(tableRow);  //  <table></table>
  tableRow.appendChild(thElement);

  for (let i = 0; i < hours.length; i++) {
    thElement = document.createElement('th');
    thElement.textContent = hours[i];
    tableRow.appendChild(thElement);
    // console.log(thElement);
  }
  thElement = document.createElement('th');
  thElement.textContent = 'Location Total';
  tableRow.appendChild(thElement);
  console.log(salmonTable);
  salmonTable.appendChild(tableRow);
}


function renderAllStores() {
  for (let i = 0; i < storeLocations.length; i++) {
    storeLocations[i].render();
  }
}


function makeFooterRow() {
  let tableRow = document.createElement('tr');
  tableRow.textContent = 'Totals';
  salmonTable.appendChild(tableRow);

  let b_Total = 0;
  for (let i = 0; i < hours.length; i++) {
    let hourlyTotal = 0;
    for (let j = 0; j < storeLocations.length; j++) {
      hourlyTotal = hourlyTotal + storeLocations[j].averageCookiesPerHour[i];
      b_Total += storeLocations[j].averageCookiesPerHour[i];
    }

    let tdElement = document.createElement('th');
    tdElement.textContent = hourlyTotal;
    tableRow.appendChild(tdElement);
  }
  // tdElement = document.createElement('td');
  // tdElement.textContent = b_Total;
  // tableRow.appendChild(tdElement);
}

new Store('seattel', 23, 65, 6.3);
new Store('tokyo', 3, 24, 1.2);
new Store('dubai', 11, 38, 3.7);
new Store('paris', 20, 38, 2.3);
new Store('lima', 2, 16, 4.6);


let form = document.getElementById('form');

form.addEventListener('submit', submitt);

function submitt(event){

  event.preventDefault();

  let name = event.target.name.value;
  let minCustomers = event.target.minCustomers.value;
  let maxCustomers = event.target.maxCustomers.value;
  let avgCookies = event.target.avgCookies.value;

  let addedarea = new Store (name, minCustomers, maxCustomers, avgCookies);

  // console.log(addedarea.name);

  addedarea.averageCustomersPerHour();
  addedarea.cookiesPerCustomer();
  addedarea.render();


}


makeHeaderRow();
renderAllStores();
makeFooterRow();


'use strict';

let workHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function randomCust(minCustsPerHour, maxCustsPerHour){ 
    return Math.floor(Math.random() * (maxCustsPerHour - minCustsPerHour + 1) + (maxCustsPerHour - minCustsPerHour)); 
}

//               ***********   Seattle   ***********

let Seattle = {
  name: 'Seattle',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  calcCookiesPerHour: [],
  calcAllCookies: 0,

  calcCookiesPurchasePerHour: function () {
    for (let i = 0; i < workHours.length; i++) {
      let cookiesPerHour = Math.ceil(this.avgCookiesPerCust * randomCust(this.minCustPerHour, this.maxCustPerHour));
      this.calcCookiesPerHour.push(cookiesPerHour);
      this.calcAllCookies += cookiesPerHour;
      console.log(`${workHours[i]}  :  ${cookiesPerHour} cookies`);
    }
  },

  render: function () {
    let parentElement = document.getElementById('sales');
    let article = document.createElement('article');
          parentElement.appendChild(article);

    let h1=document.createElement('h1');
        h1.textContent=this.name;
        article.appendChild(h1);


    let ul=document.createElement('ul');
    article.appendChild(ul);
    for (let a = 0; a < workHours.length; a++) {
      let li = document.createElement('li');
      ul.appendChild(li);
      li.textContent = `${workHours[a]}  :  ${this.calcCookiesPerHour[a]} cookies`;
    }

    let li1 = document.createElement('li');
    li1.textContent =`total : ${this.calcAllCookies} cookies`;
    ul.appendChild(li1);
  }
};

//               ***********   Tokyo   ***********

let Tokyo = {
  name: 'Tokyo',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiesPerCust: 1.2,
  calcCookiesPerHour: [],
  calcAllCookies: 0,

  calcCookiesPurchasePerHour: function () {
    for (let i = 0; i < workHours.length; i++) {
      let cookiesPerHour = Math.ceil(this.avgCookiesPerCust * randomCust(this.minCustPerHour, this.maxCustPerHour));
      this.calcCookiesPerHour.push(cookiesPerHour);
      this.calcAllCookies += cookiesPerHour;
      console.log(`${workHours[i]}  :  ${cookiesPerHour}`);
    }
  },

  render: function () {
    let parentElement=document.getElementById('sales');
    let article=document.createElement('article');
    parentElement.appendChild(article);

    let h1=document.createElement('h1');
    h1.textContent=this.name;
    article.appendChild(h1);

    let ul=document.createElement('ul');
    article.appendChild(ul);

    for (let a = 0; a < workHours.length; a++) {
      let li = document.createElement('li');
      ul.appendChild(li);
      li.textContent = `${workHours[a]}  :  ${this.calcCookiesPerHour[a]} cookies`;
    }

    let li1=document.createElement('li');
    li1.textContent=`total : ${this.calcAllCookies} cookies`;
    ul.appendChild(li1);

  }
};

//               ***********   Dubai   ***********

let Dubai = {
  name: 'Dubai',
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesPerCust: 3.7,
  calcCookiesPerHour: [],
  calcAllCookies: 0,

  calcCookiesPurchasePerHour: function () {
    for (let i = 0; i < workHours.length; i++) {
      let cookiesPerHour = Math.ceil(this.avgCookiesPerCust * randomCust(this.minCustPerHour, this.maxCustPerHour));
      this.calcCookiesPerHour.push(cookiesPerHour);
      this.calcAllCookies += cookiesPerHour;
      console.log(`${workHours[i]}  :  ${cookiesPerHour}`);
    }
  },

  render: function () {
    let parentElement=document.getElementById('sales');
    let article=document.createElement('article');
    parentElement.appendChild(article);

    let h1=document.createElement('h1');
    h1.textContent=this.name;
    article.appendChild(h1);

    let ul=document.createElement('ul');
    article.appendChild(ul);

    for (let a = 0; a < workHours.length; a++) {
      let li = document.createElement('li');
      ul.appendChild(li);
      li.textContent = `${workHours[a]}  :  ${this.calcCookiesPerHour[a]} cookies`;
    }

    let li1=document.createElement('li');
    li1.textContent=`total : ${this.calcAllCookies} cookies`;
    ul.appendChild(li1);

  }
};

//               ***********   Paris   ***********


let Paris = {
  name: 'Paris',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  calcCookiesPerHour: [],
  calcAllCookies: 0,

  calcCookiesPurchasePerHour: function () {
    for (let i = 0; i < workHours.length; i++) {
      let cookiesPerHour = Math.ceil(this.avgCookiesPerCust * randomCust(this.minCustPerHour, this.maxCustPerHour));
      this.calcCookiesPerHour.push(cookiesPerHour);
      this.calcAllCookies += cookiesPerHour;
      console.log(`${workHours[i]}  :  ${cookiesPerHour}`);
    }
  },

  render: function () {
    let parentElement=document.getElementById('sales');
    let article=document.createElement('article');
    parentElement.appendChild(article);

    let h1=document.createElement('h1');
    h1.textContent=this.name;
    article.appendChild(h1);

    let ul=document.createElement('ul');
    article.appendChild(ul);

    for (let a = 0; a < workHours.length; a++) {
      let li = document.createElement('li');
      ul.appendChild(li);
      li.textContent = `${workHours[a]}  :  ${this.calcCookiesPerHour[a]} cookies`;
    }

    let li1=document.createElement('li');
    li1.textContent=`total : ${this.calcAllCookies} cookies`;
    ul.appendChild(li1);

  }
};

//               ***********   Lima   ***********


let Lima = {
  name: 'Lima',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  calcCookiesPerHour: [],
  calcAllCookies: 0,

  calcCookiesPurchasePerHour: function () {
    for (let i = 0; i < workHours.length; i++) {
      let cookiesPerHour = Math.ceil(this.avgCookiesPerCust * randomCust(this.minCustPerHour, this.maxCustPerHour));
      this.calcCookiesPerHour.push(cookiesPerHour);
      this.calcAllCookies += cookiesPerHour;
      console.log(`${workHours[i]}  :  ${cookiesPerHour}`);

    }
  },
  render: function () {
    let parentElement=document.getElementById('sales');
    let article=document.createElement('article');
    parentElement.appendChild(article);

    let h1=document.createElement('h1');
    h1.textContent=this.name;
    article.appendChild(h1);

    let ul=document.createElement('ul');
    article.appendChild(ul);

    for (let a = 0; a < workHours.length; a++) {
      let li = document.createElement('li');
      ul.appendChild(li);
      li.textContent = `${workHours[a]}  :  ${this.calcCookiesPerHour[a]} cookies`;
    }

    let li1=document.createElement('li');
    li1.textContent=`total : ${this.calcAllCookies} cookies`;
    ul.appendChild(li1);

  }
};

Seattle.calcCookiesPurchasePerHour();
Seattle.render();
Tokyo.calcCookiesPurchasePerHour();
Tokyo.render();
Dubai.calcCookiesPurchasePerHour();
Dubai.render();
Paris.calcCookiesPurchasePerHour();
Paris.render();
Lima.calcCookiesPurchasePerHour();
Lima.render();
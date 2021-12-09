"use strict";

// задание   08 пока не принято

const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  services: {},

  start: function () {
    appData.asking();
    appData.addPrices();
    //appData.getAllServicePrices();
    appData.getFullPrice();
    appData.getServicePercentPrices();
    appData.getTitle();
    appData.logger();
  },

  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },

  asking: function () {
    appData.title = appData.checkString("Как называется ваш проект?", "   КаЛьКулятор верстки");

    for (let i = 0; i < 2; i++) {
      //let name = prompt("Какие типы экранов нужно разработать?");
      let name = appData.checkString("Какие типы экранов нужно разработать?");

      let price = 0;

      price = appData.getPrice("Сколько будет стоить данная работа?", 12000);

      appData.screens.push({ id: i, name: name, price: price });
    }

    for (let i = 0; i < 2; i++) {
      let name = appData.checkString("Какой дополнительный тип услуги нужен?");
      let price = 0;
      price = appData.getPrice("Сколько это будет стоить?", 1000);
      appData.services[name] = +price;
    }
    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  },

  addPrices: function () {
    for (let screen of appData.screens) {
      appData.screenPrice += +screen.price;
    }

    for (let key in appData.services) {
      appData.allServicePrices += appData.services[key];
    }
  },

  checkString(msg) {
    let string = "";
    do {
      string = prompt(msg);
      if (isNaN(string)) {
      } else {
        alert("Вы ввели число , нужно ввести текст , попробуйте еще раз");
      }
    } while (!isNaN(string));

    return string;
  },

  getPrice(msg) {
    let price = 0;

    do {
      price = +prompt(msg);

      if (appData.isNumber(price)) {
      } else if (price !== null) {
        alert("ВЫ ввели не число, попробуйте еще раз");
      }
    } while (!appData.isNumber(price));

    return price;
  },

  getRollbackMessage: function (price) {
    if (price >= 30000) {
      return "Даем скидку в 10%";
    } else if (15000 <= price && price < 30000) {
      return "Даем скидку в 5%";
    } else if (0 <= price && price < 15000) {
      return "Скидка не предусмотрена";
    } else {
      return "Что то пошло не так";
    }
  },

  getFullPrice: function () {
    appData.fullPrice = appData.screenPrice + appData.allServicePrices;
  },

  getTitle: function () {
    const internVar = appData.title.trim().toLowerCase();
    appData.title = internVar[0].toUpperCase() + internVar.substr(1).toLowerCase();
  },

  getServicePercentPrices: function () {
    appData.servicePercentPrice = Math.ceil(appData.fullPrice * (1 - appData.rollback / 100));
  },

  logger: () => {
    //вывести в консоль свойства и  методы объекта appData с помощью цикла for in
    for (const key in appData) {
      if (typeof appData[key] !== "function") {
        console.log(`${key}: ${appData[key]}`);
      }
    }
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);
    console.log(appData.screens);
    console.log(appData.services);
  },
};

appData.start();

// задание   07 принято

const appData = {
  title: "",
  screens: "",
  screenPrice: 0,
  adaptive: true,
  service1: "",
  service2: "",
  rollback: 10,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,

  start: function () {
    appData.asking();
    appData.getAllServicePrices();
    appData.getFullPrice();
    appData.getServicePercentPrices();
    appData.getTitle();
    appData.logger();
  },

  asking: function () {
    appData.title = prompt("Как называется ваш проект?", "Калькулятор верстки");
    const screens = prompt("Какие типы экранов нужно разработать?", " Сложные, простые, адаптивные  ");
    appData.screens = screens
      .toLowerCase()
      .split(",")
      .map((item) => item.trim());
    appData.screenPrice = appData.getPrice("Сколько будет стоить данная работа?", 12000);
    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  },

  getPrice(msg, ans = "") {
    let price = 0;

    do {
      price = +prompt(msg, ans);
    } while (!appData.isNumber(price));

    return price;
  },

  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },

  getRollbackMessage: function (price) {
    if (price >= 30000) {
      return "Даем скидку в 10%";
    } else if (15000 <= price && price < 30000) {
      return "Даем скидку в 5%";
    } else if (0 <= price && price < 15000) {
      return "Скидка не предусмотрена";
    } else {
      return "Что то пошло не так";
    }
  },

  getAllServicePrices: function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
      let price = 0;

      if (i === 0) {
        appData.service1 = prompt("Какой дополнительный тип услуги нужен?", "метрика");
      } else if (i === 1) {
        appData.service2 = prompt("Какой дополнительный тип услуги нужен?", "отправка форм");
      }
      sum += appData.getPrice("Сколько это будет стоить?");
    }
    appData.allServicePrices = sum;
  },

  getFullPrice: function () {
    appData.fullPrice = appData.screenPrice + appData.allServicePrices;
  },

  getTitle: function () {
    const internVar = appData.title.trim().toLowerCase();
    appData.title = internVar[0].toUpperCase() + internVar.substr(1).toLowerCase();
  },

  getServicePercentPrices: function () {
    appData.servicePercentPrice = Math.ceil(appData.fullPrice * (1 - appData.rollback / 100));
  },

  logger: () => {
    //вывести в консоль свойства и  методы объекта appData с помощью цикла for in
    for (const key in appData) {
      if (typeof appData[key] !== "function") {
        console.log(`${key}: ${appData[key]}`);
      }
    }
  },
};

appData.start();

//const isNumber = function (num) {
//return !isNaN(parseFloat(num)) && isFinite(num);
//};

//const showTypeOf = function (variable) {
//console.log(variable, typeof variable);
//};

/*
const getRollbackMessage = function (price) {
  if (price >= 30000) {
    return "Даем скидку в 10%";
  } else if (15000 <= price && price < 30000) {
    return "Даем скидку в 5%";
  } else if (0 <= price && price < 15000) {
    return "Скидка не предусмотрена";
  } else {
    return "Что то пошло не так";
  }
};
*/

/*
const getAllServicePrices = function () {
  let sum = 0;

  for (let i = 0; i < 2; i++) {
    let price = 0;

    if (i === 0) {
      appData.service1 = prompt("Какой дополнительный тип услуги нужен?", "метрика");
    } else if (i === 1) {
      appData.service2 = prompt("Какой дополнительный тип услуги нужен?", "отправка форм");
    }

    do {
      price = +prompt("Сколько это будет стоить?");
    } while (!appData.isNumber(price));

    sum += +price;
  }

  return sum;
};
*/

/*const getFullPrice = function () {
  return appData.screenPrice + appData.allServicePrices;
};

const getTitle = function () {
  const internVar = appData.title.trim().toLowerCase();
  return internVar[0].toUpperCase() + internVar.substr(1).toLowerCase();
};

const getServicePercentPrices = function () {
  return Math.ceil(appData.fullPrice * (1 - appData.rollback / 100));
};

*/
/*
appData.asking();
appData.allServicePrices = getAllServicePrices();
appData.fullPrice = getFullPrice();
appData.servicePercentPrice = getServicePercentPrices();
const screensSpilt = appData.screens.toLowerCase().split();
appData.title = getTitle();

*/

//console.log(appData.fullPrice);
//console.log(appData.servicePercentPrice);

//start();

// здесь конец программы по  7 заданию

//showTypeOf(title);
//showTypeOf(screenPrice);
//showTypeOf(adaptive);
//showTypeOf(fullPrice);
//showTypeOf(allServicePrices);

//console.log(getTitle(title));
//console.log(screensSpilt);
//console.log(screens);
//console.log(getRollbackMessage(fullPrice));
//console.log("чистыми ", servicePercentPrice);
//console.log("Cтоимость верстки экранов " + screenPrice + " юани и  //Стоимость разработки сайта " + fullPrice + " юани");

// бот простой
/*let input,
  random = Math.floor(Math.random() * 10);

while ((input = prompt("Введите число от 1 до 100:"))) {
  if (isNaN(input)) alert("Введите число!");
  else if (input > random) alert("Меньше!");
  else if (input < random) alert("Больше!");
  else if (input == random) {
    alert("Правильно!");
    break;
  }
}

/*let title;
let screens;
let screenPrice;
let adaptive;
const rollback = 10;
let service1;
let service2;
//const servicePrice1 = +prompt("Сколько это будет стоить?");
//const servicePrice2 = +prompt("Сколько это будет стоить?");

//console.log(!isNaN(parseFloat(num)) && isFinite()); // проверка на число

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function () {
  title = prompt("Как называется ваш проект?", "Калькуляторверстки");
  screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные");

  screenPrice = prompt("Сколько будет стоить данная работа?");
  while (!isNumber(screenPrice)) {
    screenPrice = prompt("Сколько будет стоить данная работа?");
  }
  adaptive = confirm("Нужен ли адаптив на сайте?");
};

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

const getRollbackMessage = function (price) {
  if (price >= 30000) {
    return "Даем скидку в 10%";
  } else if (15000 <= price && price < 30000) {
    return "Даем скидку в 5%";
  } else if (0 <= price && price < 15000) {
    return "Скидка не предусмотрена";
  } else {
    return "Что то пошло не так";
  }
};

const getAllServicePrices = function () {
  let sum = 0;

  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      service1 = prompt("Какой дополнительный тип услуги нужен?");
    } else if (i === 1) {
      service2 = prompt("Какой дополнительный тип услуги нужен?");
    }

    sum += +prompt("Сколько это будет стоить?");
  }

  return Number(sum);
  //return servicePrice1 + servicePrice2;
};

const getFullPrice = function () {
  return screenPrice + allServicePrices;
};

const getTitle = function (string) {
  const internVar = string.trim().toLowerCase();
  return internVar[0].toUpperCase() + internVar.substr(1).toLowerCase();
};

const getServicePercentPrices = function () {
  return Math.ceil(fullPrice * (1 - rollback / 100));
};

asking();
const allServicePrices = getAllServicePrices();
const fullPrice = getFullPrice();
const servicePercentPrice = getServicePercentPrices();
//title = getTitle();

const screensSpilt = screens.toLowerCase().split();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log("allServicePrices", allServicePrices);

console.log(getTitle(title)); //
console.log(screensSpilt);
console.log(screens);
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice);

//while (
//isNaN(screenPrice) ||
//screenPrice.trim() === "" ||
//screenPrice === null
//)   // не очень удачная проверка на число
// 4 урок старая версия до проверки

/*
let title = prompt("Как называется ваш проект?");
const screens = prompt("Какие типы экранов нужно разработать?");
const screenPrice = +prompt("Сколько будет стоить данная работа?");
const adaptive = confirm("Нужен ли адаптив на сайте?");
const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = +prompt("Сколько это будет стоить?");
const service2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = +prompt("Сколько это будет стоить?");
const rollback = 10;
let fullPrice;
let allServicePrices;
let servicePercentPrice;

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

const getRollbackMessage = function (price) {
  if (price >= 30000) {
    return "Даем скидку в 10%";
  } else if (15000 <= price && price < 30000) {
    return "Даем скидку в 5%";
  } else if (0 <= price && price < 15000) {
    return "Скидка не предусмотрена";
  } else {
    return "Что то пошло не так";
  }
};

const getAllServicePrices = function () {
  return servicePrice1 + servicePrice2;
};
allServicePrices = getAllServicePrices();

const getFullPrice = function () {
  return screenPrice + allServicePrices;
};
fullPrice = getFullPrice();

let getTitle = function (string) {
  string = string.trim();
  return string[0].toUpperCase() + string.substr(1).toLowerCase();
};
getTitle(title);
console.log(getTitle(title));

const getServicePercentPrices = function () {
  return Math.ceil(fullPrice * (1 - rollback / 100));
};
servicePercentPrice = getServicePercentPrices();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(screens.split(""));
console.log(screens);
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice);
*/

/*
//// работа 1 над ошибками  сделана
("use strict");
let title = prompt("Как называется ваш проект?");
const screens = prompt("Какие типы экранов нужно разработать?");
const screenPrice = +prompt("Сколько будет стоить данная работа?");
const adaptive = confirm("Нужен ли адаптив на сайте?");
const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = +prompt("Сколько это будет стоить?");
const service2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = +prompt("Сколько это будет стоить?");
const rollback = 10;

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

const getRollbackMessage = function (price) {
  if (price >= 30000) {
    return "Даем скидку в 10%";
  } else if (15000 <= price && price < 30000) {
    return "Даем скидку в 5%";
  } else if (0 <= price && price < 15000) {
    return "Скидка не предусмотрена";
  } else {
    return "Что то пошло не так";
  }
};

const getAllServicePrices = function () {
  return servicePrice1 + servicePrice2;
};
const allServicePrices = getAllServicePrices();

const getFullPrice = function () {
  return screenPrice + allServicePrices;
};
const fullPrice = getFullPrice();

const getTitle = function (string) {
  const internVar = string.trim().toLowerCase();
  //console.log(internVar);
  return internVar[0].toUpperCase() + internVar.substr(1).toLowerCase();
  //return internVar.string[0].toUpperCase();
};
//title = getTitle(title);
//console.log(title);
console.log(getTitle(title));

const getServicePercentPrices = function () {
  return Math.ceil(fullPrice * (1 - rollback / 100));
};
const servicePercentPrice = getServicePercentPrices();

const screensSpilt = screens.toLowerCase().split();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

//console.log(screens.toLowerCase().split(""));
console.log(screensSpilt);
console.log(screens);
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice);

*/

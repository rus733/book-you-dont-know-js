// методы работы со стилями

const title = document.getElementById("title");
title.style.backgroundColor = "blue";

console.dir(getComputedStyle(title).backgroundColor);
console.dir(getComputedStyle(title).fontSize);

console.log(title);

// методы работы с аттрибутами

//const title = document.getElementById("title");

/*

// методы работы с классами 
const title = document.getElementById("title");
title.classList.add("green-color");
title.classList.remove("title");

title.classList.toggle("title");
title.classList.toggle("title");
title.classList.toggle("title");

title.classList.contains("title");

console.log(title);
console.log(title.classList.contains("title1"));
*/

/*
//title.textContent = "DOM!";

//console.dir((title.style.backgroundColor = "green"));

const listItem = document.getElementsByTagName("header");
const links = document.getElementsByClassName("link");

//console.log(listItem);
//console.log(links);

const title1 = document.querySelector("#title");
const title2 = document.querySelector("h1");
const title3 = document.querySelector(".title");
const title4 = document.querySelector('[title = "Document object model"]');
const title5 = document.querySelector("header > ul");

const links2 = document.querySelectorAll(".link");
const links3 = document.querySelector(".link");

//console.log(links2);

//links2.forEach(function (item) {
//console.log(item);
//});

const list = document.querySelector("header > ul");
console.log(list);

const listItem2 = list.querySelectorAll("li");
console.log(listItem2);

*/

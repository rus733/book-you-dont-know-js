//методы работы с элементами DOM дерева

const lists = document.querySelectorAll(".list"); //- тут 2 списка
const elems = document.querySelectorAll(".elem"); // этопервый список с 6 элементами
console.log(lists);
console.log(elems);

//удалим 2 и 4 элементы  из НОДЫ класса .elem

//elems[2].remove();
//elems[4].remove();

//удалим 2 и 4 элементы  dj второй список с классом .list

//append ставит в конец списка
//lists[1].append(elems[2]);
//lists[1].append(elems[3]);
//lists[1].append(elems[4]);

//prepend ставит в начало списка
//lists[1].prepend(elems[5]);
//lists[1].prepend(" Привет номер 4 ");

// методы перемещения  элементов

//lists[0].before(lists[1]); // поставить второй список впереди первого , переставляет второй перед первым
//elems[3].before(elems[0]); // элемент с 0 станет перед элементом с 3 индексом

//lists[0].after(lists[1]);
//elems[3].after(elems[0]);

//методы замены одного элемента другим

//elems[4].replaceWith(elems[2]); //4 элемент убрали из верстки на его место стал 2
//elems[4].replaceWith(" Привет номер 4 ");4 элемент убрали из верстки на его место текст строка

//const cloneElem = elems[3].cloneNode(true);// клонируем свойства элемента в переменную
//cloneElem.classList.add("green-color");// меняем цвет  добавляя класс
//cloneElem.textContent = "step 6";// меняем содержиние текста
//cloneElem.innerHTML = "<strong> step 6 </strong>";// меняем написание через тег стронг
//
//lists[1].append(cloneElem);// клонируем элемент во второй список
//console.log(cloneElem);

//console.dir(cloneElem);// смотрим свойства элемента

//lists[0].innerHTML = ""; // вместо списка теперь пустая строка

/// МЕТОДЫ СОДАНИЯ ЭЛЕМЕНТОВ

/*
const newElem = document.createElement("li"); //- создаем элемент указывая его тег li
newElem.textContent = "step 6";// дадим ему текст содержание 
newElem.classList.add("elem");// дадим ему класс

lists[1].append(newElem);//добавим его в второй список 

console.log(newElem);
*/

//получим title по идентификатору

const title = document.getElementById("title"); // получим элемент по ий ди title

/// метод добавления текста в теги

/*
title.insertAdjacentText("beforebegin", "beforebegin"); // вставим текст по условию - "beforebegin" текст для примера такой же 
*/

//title.insertAdjacentText("afterend", "afterend");
//title.insertAdjacentText("beforeend", " beforeend ");
//title.insertAdjacentText("afterbegin", " afterbegin ");

//
/// метод добавления элемента  в теги, элементы уйдут из списка и переместятся в указанные места

//title.insertAdjacentElement("beforebegin", elems[0]);
//title.insertAdjacentElement("afterend", elems[1]);
////title.insertAdjacentElement("beforeend", elems[2]);
//title.insertAdjacentElement("afterbegin", elems[3]);

/// метод добавления верстки   в теги

//title.insertAdjacentHTML("beforebegin", "<span> step 1 </span>");
//title.insertAdjacentHTML("afterend", "<span> step 2 </span>");
//title.insertAdjacentHTML("beforeend", "<span> step 3 </span>");
//title.insertAdjacentHTML("afterbegin", "<span> step 4 </span>");

//устаревшие методы

//lists[1].append(elems[4], elems[3]);
//lists[1].append("строка");
lists[1].appendChild(elems[1]); // append

lists[1].insertBefore(elems[5], elems[1]); //before

lists[1].replaceChild(elems[5], elems[1]); //replaceWith

lists[1].removeChild(elems[5]); //remove

// Домашнее задание 10.Тема Работа с элементами DOM.

const books = document.querySelectorAll(".book");
const body = document.querySelector("body");

// 1.Восстановить порядок книг.

books[0].before(books[1]);
books[3].before(books[4]);
books[3].before(books[2]);
books[2].before(books[3]);
books[2].before(books[5]);

// 2. Заменить картинку заднего фона на другую из папки image

//console.dir(body.style);
body.style.backgroundImage = "url(./image/you-dont-know-js.jpg)";

// 3.Исправить заголовок в книге 3

const links = document.getElementsByTagName("a");
//console.log(links[2]);
links[2].textContent = "Книга 3. this и Прототипы Объектов";

// 4. убираем рекламу

const adv = document.querySelector(".adv");
//console.log(adv);
adv.classList.toggle("adv");
//adv.classList.remove("adv");
//console.log(adv);

// 5. Восстановить порядок глав во второй и пятой книге (внимательно инспектируйте индексы элементов, поможет dev tools)

//const lists = document.querySelectorAll("ul");
console.dir(lists);
console.dir(lists[1]);
console.dir(lists[1].children[0]);

const listsItem = document.querySelectorAll("li");
console.dir(listsItem);

lists[1].children[4].before(lists[1].children[6]);
lists[1].children[5].before(lists[1].children[8]);
lists[1].children[10].before(lists[1].children[2]);

lists[4].children[1].after(lists[4].children[9]);
lists[4].children[5].after(lists[4].children[3]);
lists[4].children[8].after(lists[4].children[6]);

// 6. в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место

const newElem = document.createElement("li"); //- создаем элемент указывая его тег li
newElem.textContent = "Глава 8: За пределами ES6"; // дадим ему текст содержание

lists[5].append(newElem); //добавим его в второй список

console.log(newElem);
lists[5].children[8].after(lists[5].children[10]);

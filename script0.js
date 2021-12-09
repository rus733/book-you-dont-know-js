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

///title.insertAdjacentText("beforebegin", "beforebegin"); // вставим текст по условию - beforebegin текст для примера такой же beforebegin

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

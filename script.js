// занесем  в  переменную элементы с классом .book

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

const lists = document.querySelectorAll("ul");
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

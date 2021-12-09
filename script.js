// занесем  в  переменную элементы с классом .book
const books = document.querySelectorAll(".book");
const body = document.querySelector("body");

//расставили книги по порядку
books[0].before(books[1]);
books[3].before(books[4]);
books[3].before(books[2]);
books[2].before(books[3]);
books[2].before(books[5]);

// меняем картику заднего фона
console.dir(body.style);
body.style.backgroundImage = "url(./image/you-dont-know-js.jpg)";

// убираем рекламу

const adv = document.querySelector(".adv");
console.log(adv);
adv.classList.toggle("adv");
//adv.classList.remove("adv");
console.log(adv);

// правим заголовок

const links = document.getElementsByTagName("a");
console.log(links[2]);
links[2].textContent = "Книга 3. this и Прототипы Объектов";

//Восстановить порядок глав во второй и пятой книге (внимательно инспектируйте индексы элементов, поможет dev tools)

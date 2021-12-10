// Домашнее задание 10. принято
//Тема Работа с элементами DOM.

const booksALLOrder = document.querySelectorAll('.book');
const bodyProperties = document.querySelector('body');
const links = document.getElementsByTagName('a');
const advertBlock = document.querySelector('.adv');
const newElem = document.createElement('li');

// 1.Восстановить порядок книг.

booksALLOrder[0].before(booksALLOrder[1]);
booksALLOrder[3].before(booksALLOrder[4]);
booksALLOrder[3].before(booksALLOrder[2]);
booksALLOrder[2].before(booksALLOrder[3]);
booksALLOrder[2].before(booksALLOrder[5]);

// 2. Заменить картинку заднего фона на другую из папки image
bodyProperties.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

// 3.Исправить заголовок в книге 3

links[2].textContent = 'Книга 3. this и Прототипы Объектов';

// 4. убираем рекламу

advertBlock.classList.toggle('adv'); // выключил
//и второй вариант
//adv.classList.remove("adv"); //удалил

// 5. Восстановить порядок глав во второй и пятой книге (внимательно инспектируйте индексы элементов, поможет dev tools)

const lists = document.querySelectorAll('ul');

lists[1].children[4].before(lists[1].children[6]);
lists[1].children[5].before(lists[1].children[8]);
lists[1].children[10].before(lists[1].children[2]);

lists[4].children[1].after(lists[4].children[9]);
lists[4].children[5].after(lists[4].children[3]);
lists[4].children[8].after(lists[4].children[6]);

// 6. в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место

newElem.textContent = 'Глава 8: За пределами ES6';
lists[5].append(newElem); //добавим его в список
lists[5].children[8].after(lists[5].children[10]);

window.onload = function() {   // запуск работы джава скрипта по загрузке страницы
   var menu = document.querySelector('.main_menu'); // создаем переменную и вызываем свойство .main_menu
   var top1 = menu.offsetTop; // top1 = 808 // сооздаем переменную и командой offsetTop берем координаты верней части блока по оси Y
   var fixed = false; // предварительно создаем класс fixed, прописывем его новые свойства в css, здесь создем переменную присвоив ей значение фолс
   document.onscroll = function() {  // по скролу будет выполнятся функция...
     if (!fixed && menu.getBoundingClientRect().top < 0) { // если не fixed и позиция относительно окна по топу < 0,
       menu.className += ' fixed'; // то main_menu менем на fixed
       fixed = true; // и присваиваем значение true
     }
     else if (fixed && window.scrollY < top1) { // иначе если свойство fixed и значение по оси Y < значения взятого командой offsetTop в переменной top1
       menu.className = menu.className.split(' ')[0];  // то
       fixed = false;
     }
   };
};

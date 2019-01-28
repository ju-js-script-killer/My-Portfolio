window.onload = function() {   // запуск работы джава скрипта по загрузке страницы
// 1.fixed main_menu
   var menu = document.querySelector('.main_menu'); // создаем переменную и вызываем свойство .main_menu
   var top1 = menu.offsetTop; // top1 = 808 // сооздаем переменную и командой offsetTop берем координаты верней части блока по оси Y
   var fixed = false; // предварительно создаем класс fixed, прописывем его новые свойства в css, здесь создем переменную присвоив ей значение фолс
   document.onscroll = function() {  // по скролу будет выполнятся функция...
     if (!fixed && menu.getBoundingClientRect().top < 0) { // если не fixed и позиция относительно окна по топу < 0,
       menu.className += ' fixed'; // в классе main_menu добавляем fixed
       fixed = true; // и присваиваем значение true
     }
     else if (fixed && window.scrollY < top1) { // иначе если свойство fixed и значение по оси Y < значения взятого командой offsetTop в переменной top1
       menu.className = menu.className.split(' ')[0];  // в классе "main_menu fixed" командой сплит выбирается только свойство под индексом 0 , т.е 1ое.
       fixed = false; // и присваиваем второму классу и его свойствам фолс
     }
   };
  // 2. Функция скрола к разделу при нажатии на кнопки в main_menu
     var MainMenu = document.querySelector('.wrap');
     MainMenu.onclick = function(e) {
     let target = e.target;
     let idblock = target.className;
     let scrollTarget = document.querySelector('#' + idblock).offsetTop;

     let t = setInterval(function() {
       if (Math.abs(scrollY - scrollTarget) < 15) {
         scrollTo(0, scrollTarget);
         clearInterval(t);
       } else if (scrollY < scrollTarget) {
         scrollBy(0, 30);
       } else if (scrollY > scrollTarget) {
         scrollBy(0, -30);
       }
     }, 15);
};
};

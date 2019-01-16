window.onload = function() {
   var menu = document.querySelector('.main_menu');
   var top1 = menu.offsetTop; // top1 = 808
   var fixed = false;
   document.onscroll = function() {
     if (!fixed && menu.getBoundingClientRect().top < 0) {
       menu.className += ' fixed';
       fixed = true;
     }
     else if (fixed && window.scrollY < top1) {
       menu.className = menu.className.split(' ')[0];
       fixed = false;
     }
   };
};

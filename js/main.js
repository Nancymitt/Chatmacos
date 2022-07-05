const hmenu = document.querySelectorAll('.header__menu__item');

for (item of hmenu) {
   item.addEventListener('click', function () {
      //открытие/закрытие по тыканию. this - ображение к элементу, заданному for
      // this.classList.toggle('active');
      if (this.classList.contains('active')) {
         this.classList.remove('active');
      }
      //а также для всех убираем класс active
      else {
         for (el of hmenu) {
            el.classList.remove('active');
         }
         //ну а в тыкаемый добавляем
         this.classList.add('active');
      }
   })
}
const smenu = document.querySelectorAll('.second__menu-item');

for (item of smenu) {
   item.addEventListener('click', function () {
      //открытие/закрытие по тыканию. this - ображение к элементу, заданному for
      // this.classList.toggle('active');
      if (this.classList.contains('active')) {
         this.classList.remove('active');
      }
      //а также для всех убираем класс active
      else {
         for (el of smenu) {
            el.classList.remove('active');
         }
         //ну а в тыкаемый добавляем
         this.classList.add('active');
      }
   })
}


$(function () {
   $(".aside__btn").on("click", function () {
      $(".aside__btn").toggleClass("active");
      $(".aside").toggleClass("active");
      // $("body").toggleClass("lock");
   });
   $(".second__btn").on("click", function () {
      $(".second__btn").toggleClass("active");
      $(".second__menu").toggleClass("active");
      $(".second__friends").toggleClass("active");
   });
});


// без jQuery - с ним пробовал, но если их несколько, то глючит
// var mixer = mixitup(".gallery__inner", {
//    // если хочется, указываем класс активной кнопки по умолчанию
//    load: { filter: ".my__btn" },
// });

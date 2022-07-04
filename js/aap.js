$(function () {

   var header = $("#header"),
      introH = $("#intro").innerHeight(),
      scrollOffset = $(window).scrollTop();

   /*Fixed Header*/
   checkScroll(scrollOffset);

   $(window).on("scroll resize", function () {

      scrollOffset = $(this).scrollTop();

      checkScroll(scrollOffset);

   });

   function checkScroll(scrollOffset) {
      if (scrollOffset >= introH) {
         header.addClass("fixed");
      } else {
         header.removeClass("fixed");
      }
   }

   /*Smooth scroll*/
   $("[data-scroll]").on("click", function (event) {
      event.preventDefault();

      var $this = $(this);
      blockId = $this.data('scroll');
      blockOffset = $(blockId).offset().top;

      $(".nav a").removeClass("active");
      $this.addClass("active");

      $("html, body").animate({
         scrollTop: blockOffset - 60
      }, 500)

      $(".nav a").on("click", function (event) {
         event.preventDefault();
         $(".nav").removeClass("active");
         $(".nav--toggle").removeClass("active");
      });

   });


   /*Menu nav toggle*/
   $("#nav_toggle").on("click", function (event) {
      event.preventDefault();
      $(this).toggleClass("active");
      $(".nav").toggleClass("active");
   });

   /*Change*/
   $("[data-change]").on("click", function (event) {
      event.preventDefault();

      var $this = $(this),
         blockId = $this.data('change');

      $(".tabs__item").removeClass("active");
      $this.addClass("active");

   });

   /* Filter
   =====================*/
   let filter = $("[data-filter]");

   filter.on("click", function (event) {
      event.preventDefault();

      let cat = $(this).data('filter');
      $("[data-cat]").each(function () {
         let workCat = $(this).data('cat');

         if (workCat != cat) {
            $(this).removeClass('active');
         } else {
            $(this).addClass('active');
         }
      });

   });


});
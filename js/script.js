// // book site
// var books = [{
//        id: "book1",
//         name: "Octopus Encounters",
//         item: "test1",
//         author: "Anton First",
//         description: "One Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
//         img: "img/octopus_encounters.png"
//     },
//     {
//       id: "book2",
//       name: "The Crimson Way",
//       item: "test2",
//       author: "S. R. Keightley",
//       description: "Two Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
//       img: "img/the_crimson_way.png"
//     },
//     {
//       id: "book3",
//       name: "Far Gone",
//       item: "test3",
//       author: "Mark Thirst",
//       description: "Three Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
//       img: "img/far_gone.png"
//     },
//     {
//       id: "book4",
//       name: "Alternative Views",
//       item: "test4",
//       author: "Walter Fond",
//       description: "Four Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
//       img: "img/alternative_views.png"
//     },
//     {
//       id: "book5",
//       name: "Under No Umbrella",
//       item: "test5",
//       author: "Eduard Ferst",
//       description: "Five Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
//       img: "img/under_no_umbrella.png"
//     },
//     {
//       id: "book6",
//       name: "I Never Said That",
//       item: "test6",
//       author: "Antalia Stark",
//       description: "Six Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
//       img: "img/i_never_said_that.png"
//         }
// ];

$('img, .book-description').on("click touch", function(){
 //  console.log("test");
  var bookId = $(this).attr('id');
  console.log(bookId);

  index = books.findIndex(x => x.id==bookId);
  console.log(index);

  var name = books[index].name;
  var author = books[index].author;
  var image = books[index].img;
  var description = books[index].description;
  console.log(image);

  $(".title").text(name);
  $(".author").text("by " + author);
  $(".details-descr").text(description);

  document.getElementById("details-img").src= image;
  console.log(name);
  $("#myCarousel").addClass("hide-section");
  $("#details-page").removeClass("hide-section");
});

// // hide brand when clicking on hamburger menu
// $('button').click(function(){
//   $('.toggle').toggleClass('hide-blp');
// });

// add 'continue reading..' add on in mobile view
 if ( $(window).width() < 767) {
   $(document).ready(function() {
   	var showText = 130;
   	$('.book-description').each(function() {
   		var content = $(this).html();

   		if(content.length > showText) {
   			var c = content.substr(0, showText);
        //  var bookLink = $(this).attr("id");
   			// var h = content.substr(showText-1, content.length - showText)
   			var html = c + '<a class="underline" href="#"> ...continue reading</a>';
   			$(this).html(html);
   		};
   	});
   });
 }

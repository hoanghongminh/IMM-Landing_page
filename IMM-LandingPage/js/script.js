$(document).ready(function () {
  var autoLoad = setInterval(function () {
    $("#btn-next").trigger("click");
  });

  $("#btn-next").click(function (event) {
    clearInterval(autoLoad);
    var after_slide = $(".active").next();
    var current_slide = $(".active_root").index() + 1;
    if (after_slide.length != 0) {
      $(".active")
        .addClass("out_left")
        .one("webkitAnimationEnd", function (event) {
          $(".out_left").removeClass("out_left").removeClass("active");
        });
      after_slide
        .addClass("active")
        .addClass("in_right")
        .one("webkitAnimationEnd", function (event) {
          $(".in_right").removeClass("in_right");
        });
      // xử lý nút
      $(".root_slide ul li").removeClass("active_root");
      $(".root_slide ul li:nth-child(" + (current_slide + 1) + ")").addClass(
        "active_root"
      );
    } else {
      $(".active")
        .addClass("out_left")
        .one("webkitAnimationEnd", function (event) {
          $(".out_left").removeClass("out_left").removeClass("active");
        });
      $(".slide:first-child")
        .addClass("active")
        .addClass("in_right")
        .one("webkitAnimationEnd", function (event) {
          $(".in_right").removeClass("in_right");
        });
      // xử lý nút
      $(".root_slide ul li").removeClass("active_root");
      $(".root_slide ul li:nth-child(1)").addClass("active_root");
    }
  });
  $("#btn-prev").click(function (event) {
    clearInterval(autoLoad);
    var before_slide = $(".active").prev();
    var current_slide = $(".active_root").index() + 1;
    if (before_slide.length != 0) {
      $(".active")
        .addClass("out_right")
        .one("webkitAnimationEnd", function (event) {
          $(".out_right").removeClass("out_right").removeClass("active");
        });
      before_slide
        .addClass("active")
        .addClass("in_left")
        .one("webkitAnimationEnd", function (event) {
          $(".in_left").removeClass("in_left");
        });
      // xử lý nút
      $(".root_slide ul li").removeClass("active_root");
      $(".root_slide ul li:nth-child(" + (current_slide - 1) + ")").addClass(
        "active_root"
      );
    } else {
      $(".active")
        .addClass("out_right")
        .one("webkitAnimationEnd", function (event) {
          $(".out_right").removeClass("out_right").removeClass("active");
        });
      $(".slide:last-child")
        .addClass("active")
        .addClass("in_left")
        .one("webkitAnimationEnd", function (event) {
          $(".in_left").removeClass("in_left");
        });
      // xử lý nút
      $(".root_slide ul li").removeClass("active_root");
      $(".root_slide ul li:last-child").addClass("active_root");
    }
  });

  $(".root_slide ul li").click(function (event) {
    clearInterval(autoLoad);
    var current_slide = $(".active_root").index() + 1;
    var click_position = $(this).index() + 1;
    $(".root_slide ul li").removeClass("active_root");
    $(this).addClass("active_root");
    if (click_position > current_slide) {
      $(".active")
        .addClass("out_left")
        .one("webkitAnimationEnd", function (event) {
          $(".out_left").removeClass("out_left").removeClass("active");
        });
      $(".slide:nth-child(" + click_position + ")")
        .addClass("active")
        .addClass("in_right")
        .one("webkitAnimationEnd", function (event) {
          $(".in_right").removeClass("in_right");
        });
    }
    if (click_position < current_slide) {
      $(".active")
        .addClass("out_right")
        .one("webkitAnimationEnd", function (event) {
          $(".out_right").removeClass("out_right").removeClass("active");
        });
      $(".slide:nth-child(" + click_position + ")")
        .addClass("active")
        .addClass("in_left")
        .one("webkitAnimationEnd", function (event) {
          $(".in_left").removeClass("in_left");
        });
    }
  });
});

//slider author

const myslide = document.querySelectorAll(".myslide"),
  dot = document.querySelectorAll(".dot");
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
  counter += 1;
  slidefun(counter);
}
function plusSlides(n) {
  counter += n;
  slidefun(counter);
  resetTimer();
}
function currentSlide(n) {
  counter = n;
  slidefun(counter);
  resetTimer();
}
function resetTimer() {
  clearInterval(timer);
  timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {
  let i;
  for (i = 0; i < myslide.length; i++) {
    myslide[i].style.display = "none";
  }
  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(" active", "");
  }
  if (n > myslide.length) {
    counter = 1;
  }
  if (n < 1) {
    counter = myslide.length;
  }
  myslide[counter - 1].style.display = "block";
  dot[counter - 1].className += " active";
}

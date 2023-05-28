// nav-hover

$(".nav-link").on("mouseover", function () {
  $(this).addClass("nav-link-hover");
});

$(".nav-link").on("mouseout", function () {
  $(this).removeClass("nav-link-hover");
});

$(".navbar-brand").on("mouseover", function () {
  $(this).addClass("navbar-brand-hover");
});

$(".navbar-brand").on("mouseout", function () {
  $(this).removeClass("navbar-brand-hover");
});

// auto scroll on page for pricing section

$("#pricing_scroll").click(function (event) {
  event.preventDefault();
  var offset_val = $("#pricing").offset().top;
  $("html,body").animate(
    {
      scrollTop: offset_val,
    },
    200
  );
});


// hover on red-btns


$(".heart_mar").mouseover(function(){
  $(this).addClass("heart_mar_hover");
  $(this).find(".red_btn").addClass("red_btn_hover");
});
$(".heart_mar").mouseout(function(){
  $(this).removeClass("heart_mar_hover");
  $(this).find(".red_btn").removeClass("red_btn_hover");
});


// notiify button click

$(".notify-btn").click(function(){
  $(".notify-btn").hide();
  $("#success").show();
})

// revert back home click 

$(".revertHome").click(function(){
  window.location.href="index.html"; 
})

// top scroll button

$(window).scroll(function() {
  if ($(this).scrollTop() > 1400) {
    $("#btnTop").show();
  } else {
    $("#btnTop").hide();
  }
});


$("#btnTop").click(function(){
  // document.documentElement.scrollTop=0;   // alternate method
  $("html,body").animate({
    scrollTop:0
  },200);
  
})


// popup loading


$(document).ready(function() {
  setTimeout(function() {
    $("#popupOverlay").css("display", "block");
  }, 7000);

  $("#closePopup").on("click", function() {
    $("#popupOverlay").css("display", "none");
  });
});


// updating pricing plan on payment page


$(document).ready(function() {
  $(".price-btn").click(function() {
    var buttonId = $(this).attr("id");
    sessionStorage.setItem("selectedPlan", buttonId);
  });
});

$(document).ready(function() {
  var selectedPlan = sessionStorage.getItem("selectedPlan");
  if (selectedPlan) {
    $("#showItemName").text(selectedPlan);

  
    switch (selectedPlan) {
      case "Spark":
        $("#showItemPrice").text("Free");
        $("#taxesValue").text("$0");
    $("#discountValue").text("$" + "0");
    $("#totalValue").text("Free");
        break;
      // Add additional cases for other plans if needed
      case "Blaze":
        $("#showItemPrice").text("$49.00");
        $("#discountValue").text("$" + "3");
       
        $("#totalValue").text("$46.99");
        break;

        case "Ignite":
          $("#showItemPrice").text("$99.00");
          $("#discountValue").text("$" + "3");
         
          $("#totalValue").text("$96.99");
          break;
      default:
        break;
    }

   
  }
});





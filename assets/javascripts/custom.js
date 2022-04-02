$('#profileItems').owlCarousel({
    loop: true,
    margin: 10,
    nav: !1,
    dots: !0,
    autoplay: !0,
    autoplayTimeout: 2500,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
});


const todaydate = new Date();
let year = todaydate.getFullYear();
var startyear = $(".startyear").html();


if (startyear != year) {
    $(".thisyear").html(" to " + year);
}


$("#readMore").click(function () {
    $(".readmoreabtcrpntr").toggleClass("d-none");
    let text = $("#readMore").html();
    var finalText = (text >= 'Read More') ? "Read Less" : "Read More";
    $("#readMore").html(finalText);
});






//  work samples 

$(document).ready(function () {
    let imgstotal = $("#totalImages .magnific-img").length;
    $(".imgNum").html(imgstotal);
});






$(document).ready(function () {
    $('.image-popup-vertical-fit').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom',
        gallery: {
            enabled: true
        },

        zoom: {
            enabled: true,

            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function

            opener: function (openerElement) {

                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }

    });

});







//links 
$(".showprofile").click(function () {
    window.location.href = 'carpenter_page.html';
});

$(".getService").click(function () {
    window.location.href = 'particular_service.html';
});

// $(".dropdown-item").click(function (event) {
//     event.preventDefault();
//     window.location.href = 'catagories.html';
// });

$("#dealNow").click(function (event) {
    event.preventDefault();
    window.location.href = 'login_signup_page.html';
});

$("#goBack").click(function (event) {
    event.preventDefault();
    // window.location.href = 'index.html';
    history.back();
});

$("#ordernPaymentNow").click(function (event) {
    event.preventDefault();
    window.location.href = 'payment.html';
});

$("#addNew").click(function () {
    window.location.href = 'complete_bid.html';
});

$("#post").click(function () {
    window.location.href = 'see_bids.html';
});

// links done









function activeArray(passedThis) {
    var dataId = $(passedThis).attr("data-id");
    // $("#arrowDown").removeClass("rotate");
    // $(passedThis).addClass("rotate");



    if ($(passedThis).hasClass("rotate")) {
        $(passedThis).removeClass("rotate");
    } else {
        $("#arrowDown").removeClass("rotate");
        $(passedThis).addClass("rotate");
    }



    if ($("#" + dataId).hasClass("d-none")) {
        $(".allSentBids").addClass("d-none");
        $("#" + dataId).removeClass("d-none");
    } else {
        $("#" + dataId).addClass("d-none");
    }

}



function addUnit(passedValue) {
    console.log(passedValue);
    window.location.href = 'see_bids.html';
}


$(".unitImage").click(function () {
    var imageSrc = $(this).attr("src");
    $(".popUpImg").attr("src", imageSrc);
    $("#showImagePopup").removeClass("d-none");
});


function crossItem() {
    $("#showImagePopup").addClass("d-none");
}





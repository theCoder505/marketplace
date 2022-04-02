var customProfileFileInput1 = document.querySelector("#addProfileImg");
var previewProfile1 = document.querySelector(".profileImgMainImg");

var customProfileFileInput2 = document.querySelector("#addProfileImg2");
var previewProfile2 = document.querySelector(".profileImgMainImg2");

var customProfileFileInput3 = document.querySelector("#addProfileImg3");
var previewProfile3 = document.querySelector(".profileImgMainImg3");

var customProfileFileInput4 = document.querySelector("#addProfileImg4");
var previewProfile4 = document.querySelector(".profileImgMainImg4");

var customProfileFileInput5 = document.querySelector("#addProfileImg5");
var previewProfile5 = document.querySelector(".profileImgMainImg5");

// -------------------------------------------------------------------------




function showProfile(event) {
    if (event.target.files.length > 0) {
        var src = URL.createObjectURL(event.target.files[0]);
        // var ImgError = document.querySelector(".ImgError");

        var size = event.target.files[0].size;
        var sizeInKb = size / 1024;
        if (sizeInKb > 500) {
            alert("use less than 500KB");
            // ImgError.style.display = "block";
            customProfileFileInput1.value = "";
            previewProfile1.src = "";
            previewProfile1.style.display = null;
        } else if (sizeInKb < 500) {
            previewProfile1.src = src;
            // ImgError.style.display = null;
            previewProfile1.style.display = "block";
            $("#crossBidImage").removeClass("d-none");
        }
    }
}


function showProfile2(event) {
    if (event.target.files.length > 0) {
        var src = URL.createObjectURL(event.target.files[0]);
        // var ImgError = document.querySelector(".ImgError");

        var size = event.target.files[0].size;
        var sizeInKb = size / 1024;
        if (sizeInKb > 500) {
            alert("use less than 500KB");
            // ImgError.style.display = "block";
            customProfileFileInput2.value = "";
            previewProfile2.src = "";
            previewProfile2.style.display = null;
        } else if (sizeInKb < 500) {
            previewProfile2.src = src;
            // ImgError.style.display = null;
            previewProfile2.style.display = "block";
            $("#crossBidImage2").removeClass("d-none");
        }
    }
}


function showProfile3(event) {
    if (event.target.files.length > 0) {
        var src = URL.createObjectURL(event.target.files[0]);
        // var ImgError = document.querySelector(".ImgError");

        var size = event.target.files[0].size;
        var sizeInKb = size / 1024;
        if (sizeInKb > 500) {
            alert("use less than 500KB");
            // ImgError.style.display = "block";
            customProfileFileInput3.value = "";
            previewProfile3.src = "";
            previewProfile3.style.display = null;
        } else if (sizeInKb < 500) {
            previewProfile3.src = src;
            // ImgError.style.display = null;
            previewProfile3.style.display = "block";
            $("#crossBidImage3").removeClass("d-none");
        }
    }
}


function showProfile4(event) {
    if (event.target.files.length > 0) {
        var src = URL.createObjectURL(event.target.files[0]);
        // var ImgError = document.querySelector(".ImgError");

        var size = event.target.files[0].size;
        var sizeInKb = size / 1024;
        if (sizeInKb > 500) {
            alert("use less than 500KB");
            // ImgError.style.display = "block";
            customProfileFileInput4.value = "";
            previewProfile4.src = "";
            previewProfile4.style.display = null;
        } else if (sizeInKb < 500) {
            previewProfile4.src = src;
            // ImgError.style.display = null;
            previewProfile4.style.display = "block";
            $("#crossBidImage4").removeClass("d-none");
        }
    }
}


function showProfile5(event) {
    if (event.target.files.length > 0) {
        var src = URL.createObjectURL(event.target.files[0]);
        // var ImgError = document.querySelector(".ImgError");

        var size = event.target.files[0].size;
        var sizeInKb = size / 1024;
        if (sizeInKb > 500) {
            alert("use less than 500KB");
            // ImgError.style.display = "block";
            customProfileFileInput5.value = "";
            previewProfile5.src = "";
            previewProfile5.style.display = null;
        } else if (sizeInKb < 500) {
            previewProfile5.src = src;
            // ImgError.style.display = null;
            previewProfile5.style.display = "block";
            $("#crossBidImage5").removeClass("d-none");
        }
    }
}



function cancelImage(passedLocation) {
    $("." + passedLocation).attr("src", 'assets/images/webimages/galleryicon.png');
    $('input[data-id="' + passedLocation + '"]').val(null);
    $(".fa.fa-times").addClass("d-none");
}

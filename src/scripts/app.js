//================================ Jeffery Cen ================================
//
// Purpose: General purpose
//
//=============================================================================

/** 
 * Changes the height of a class to the height of the page
 * @param {String} whatClass What class you want to change
 */
function changeHeight(whatClass) {
    document.getElementById(whatClass).style.height = (window.innerHeight * 0.9999) + 'px';
}

/** 
 * Change the width of an object
 * @param orgID What original object which the width is mimicking
 * @param whatID What object's width is being modified
 */
function changeWidth(orgID, whatID) {
    var colWidth = document.getElementById(orgID).offsetWidth;
    document.getElementById(whatID).style.width = (colWidth - 30) + "px";
}

// Whenever browser resized, resize the landing
$(window).resize(function() {
    changeHeight("landing");
    changeWidth("logoContainer", "logoParent");
    changeWidth("logoContainer", "logo");
})

// Attach top of logo thing to top 
window.addEventListener('scroll', function() {
    var logoParent = $("#logoParent");
    var scrollTop = $(window).scrollTop();
    var landingHeight = document.getElementById("landingWhole").offsetHeight * 1.0001;
    if (scrollTop > landingHeight) {
        logoParent.removeClass("logoParent")
        logoParent.addClass("logoParentFixed");
    }
    else {
        logoParent.removeClass("logoParentFixed")
        logoParent.addClass("logoParent");
    }
})

/**
 * Initialize JavaScript on page load
 */
function init() {
    changeHeight("landing");
    changeWidth("logoContainer", "logoParent");
    changeWidth("logoParent", "logo");

    // Info fade
    document.getElementById('landingInfo').className += ' landingInfo';
    $(function() {
        $('#landingInfo').removeClass('landingPageEmpty');
    });    
}
init();

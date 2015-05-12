/**
 * Created by Sean on 5/1/2015.
 */
var HEADER_HEIGHT = 216;

function Navigate() {
    this.gotoTable();
    this.gotoTop();
}

Navigate.gotoTable = function () {
    $("#fab-ha").click(function() {
        $('html, body').animate({
            scrollTop: $("#ha-table").offset().top - HEADER_HEIGHT
        }, 1000);
    });
};

Navigate.gotoTop = function () {
    $('#fab-top').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });
};

module.exports = Navigate;

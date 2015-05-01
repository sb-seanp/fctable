/**
 * Created by Sean on 4/24/2015.
 */

var HEADER_HEIGHT = 216;

$(function () {
    $(".league-table").tablesorter({
        sortList: [[0, 0]]
    });
    Ui.setHeaderBackground(Ui.getFirstPath());
    Ui.setActiveTab(Ui.getFirstPath());
    //Ui.setRowBackground(Ui.getFirstPath());
    Navigate.gotoTable();
    Navigate.gotoTop();
    $.material.ripples();
    new WOW().init();
});

function Ui() {
    this.getFirstPath();
    this.setHeaderBackground();
    this.setActiveTab();
}

function Navigate() {
    this.gotoTable();
    this.gotoTop();
}

Ui.getFirstPath = function() {
    return window.location.pathname.replace(/^\/([^\/]*).*$/, '$1');
};

Ui.setHeaderBackground = function(first) {
    if (first == 'england') $('.navbar-default.navbar').css('background-color', '#00245D');
    if (first == 'spain') $('.navbar-default.navbar').css('background-color', '#FFDF00');
    if (first == 'germany') $('.navbar-default.navbar').css('background-color', '#CD0001');
    if (first == 'italy') $('.navbar-default.navbar').css('background-color', '#317031');
    if (first == 'france') $('.navbar-default.navbar').css('background-color', '#4D5C64');
    if (first == 'portugal') $('.navbar-default.navbar').css('background-color', '##D9030F');
};

Ui.setActiveTab = function(first) {
    if (first.length > 0) $('.nav-tabs a[href^="/' + first + '"]').addClass('active');
};

Ui.setRowBackground = function (first) {
    if (first == 'england' || first == 'spain' || first == 'germany') {
        $('.league-table tbody tr:lt(3)').removeClass('reg-row').addClass('promo');
        $('.league-table tbody tr:nth-of-type(4)').removeClass('reg-row').addClass('pplay');
        $('.league-table tbody tr:nth-of-type(5)').removeClass('reg-row').addClass('europa');
        $('.league-table tbody tr:nth-of-type(6)').removeClass('reg-row').addClass('europa');
        $('.league-table tbody tr:gt(-4)').removeClass('reg-row').addClass('releg');
        if (first == 'germany') {
            $('.league-table tbody tr:nth-of-type(16)').removeClass('releg').addClass('rplay');
        }
    }
    else if (first == 'italy' || first == 'france' || 'portugal') {
        $('.league-table tbody tr:lt(2)').removeClass('reg-row').addClass('promo');
        $('.league-table tbody tr:nth-of-type(3)').removeClass('reg-row').addClass('pplay');
        $('.league-table tbody tr:nth-of-type(4)').removeClass('reg-row').addClass('europa');
        $('.league-table tbody tr:nth-of-type(5)').removeClass('reg-row').addClass('europa');
        $('.league-table tbody tr:gt(-4)').removeClass('reg-row').addClass('releg');
        if (first == 'france') {
            $('.league-table tbody tr:nth-of-type(5)').removeClass('europa').addClass('reg-row');
        }
        if (first == 'portugal') {
            $('.league-table tbody tr:nth-of-type(16)').removeClass('releg').addClass('reg-row');
        }
    }
    else {}
};

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

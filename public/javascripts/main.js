/**
 * Created by Sean on 4/24/2015.
 */

$(function () {
    $(".league-table").tablesorter({
        sortList: [[0, 0]]
    });
    Ui.setHeaderBackground(Ui.getFirstPath());
    Ui.setActiveTab(Ui.getFirstPath());
    Ui.setRowBackground(Ui.getFirstPath());
    $.material.ripples();
});

function Ui() {
    this.getFirstPath();
    this.setHeaderBackground();
    this.setActiveTab();
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
        $('.league-table tbody tr:lt(3)').addClass('promo');
        $('.league-table tbody tr:nth-of-type(4)').addClass('pplay');
        $('.league-table tbody tr:nth-of-type(5)').addClass('europa');
        $('.league-table tbody tr:nth-of-type(6)').addClass('europa');
        $('.league-table tbody tr:gt(-4)').addClass('releg');
        if (first == 'germany') {
            $('.league-table tbody tr:nth-of-type(16)').removeClass('releg').addClass('rplay');
        }
    }
};

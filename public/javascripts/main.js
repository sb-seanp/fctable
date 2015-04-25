/**
 * Created by Sean on 4/24/2015.
 */

$(function () {
    $(".league-table").tablesorter({
        sortList: [[0, 0]]
    });
    Ui.setHeaderBackground(Ui.getFirstPath());
    Ui.setActiveTab(Ui.getFirstPath());
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
};

Ui.setActiveTab = function(first) {
    if (first.length > 0) $('.nav-tabs a[href^="/' + first + '"]').addClass('active');
};

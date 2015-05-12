/**
 * Created by Sean on 4/24/2015.
 */
var Ui          = require('./ui.js'),
    Navigate    = require('./navigate.js');

$(function () {
    $(".league-table").tablesorter({
        sortList: [[0, 0]]
    });
    Ui.setHeaderBackground(Ui.getFirstPath());
    Ui.setActiveTab(Ui.getFirstPath());
    Ui.setRowBackground(Ui.getFirstPath());
    Navigate.gotoTable();
    Navigate.gotoTop();
    $.material.ripples();
    new WOW().init();
});

/**
 * Created by Sean on 4/24/2015.
 */

$(function () {
    $(".league-table").tablesorter({
        sortList: [[0, 0]]
    });
});

if (window.location.href.indexOf("england/1") > 0) {
    $('.navbar-default.navbar').css('background-color', '#00245D');
    $('#england-tab').addClass('active');
}

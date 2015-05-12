/**
 * Created by Sean on 5/1/2015.
 */
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

    if (first == 'england' || first == 'spain' || first == 'germany' || first == 'italy' || first =='france' || first == 'portugal') {
        $('.league-table tbody tr:nth-of-type(1)').removeClass('reg-row').addClass('promo');
        $('.league-table tbody tr:nth-of-type(2)').removeClass('reg-row').addClass('promo');
        if (first == 'england' || first == 'spain' || first == 'germany') {
            $('.league-table tbody tr:nth-of-type(3)').removeClass('reg-row').addClass('promo');
            $('.league-table tbody tr:nth-of-type(4)').removeClass('reg-row').addClass('pplay');
            $('.league-table tbody tr:nth-of-type(5)').removeClass('reg-row').addClass('europa');
            $('.league-table tbody tr:nth-of-type(6)').removeClass('reg-row').addClass('europa');
        }
        if (first == 'italy' || first =='france' || first == 'portugal') {
            $('.league-table tbody tr:nth-of-type(3)').removeClass('reg-row').addClass('pplay');
            $('.league-table tbody tr:nth-of-type(4)').removeClass('reg-row').addClass('europa');
            if (first == 'italy' || first == 'portugal') {
                $('.league-table tbody tr:nth-of-type(5)').removeClass('reg-row').addClass('europa');
            }
        }
        if (first == 'england' || first == 'spain' || first == 'italy' || first == 'france') {
            $('.league-table tbody tr:nth-of-type(18)').removeClass('reg-row').addClass('releg');
            $('.league-table tbody tr:nth-of-type(19)').removeClass('reg-row').addClass('releg');
            $('.league-table tbody tr:nth-of-type(20)').removeClass('reg-row').addClass('releg');
        }
        if (first == 'germany' || first == 'portugal') {
            $('.league-table tbody tr:nth-of-type(17)').removeClass('reg-row').addClass('releg');
            $('.league-table tbody tr:nth-of-type(18)').removeClass('reg-row').addClass('releg');
            if (first == 'germany') {
                $('.league-table tbody tr:nth-of-type(16)').removeClass('reg-row').addClass('rplay');
            }
        }
    }
};

module.exports = Ui;

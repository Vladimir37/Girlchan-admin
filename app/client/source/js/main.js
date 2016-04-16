$(document).ready(function() {
    if(window.location.hash == '#incorrect') {
        $('<article class="alert alert-danger">Incorrect username or password!</article>').prependTo('.login_form');
    }
    if(window.location.hash == '#unlog') {
        $('<article class="alert alert-danger">You are not logged!</article>').prependTo('.login_form');
    }
    if(window.location.hash == '#success') {
        $('<article class="alert alert-success">Success!</article>').prependTo('.main_content');
    }
});
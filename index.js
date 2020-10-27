var current = 1

$("span").click(function () {

    $(".fa-toggle-on").toggleClass("monthly");

    if (current === 1) {
    monthly();
    current = 2;
    }

    else {
    annually();
    current = 1;
    }
});

// ACTIVE STATES
$("span").hover(function() {
    $("span").addClass("fa-toggle-on-hover");
}, function () {
    $("span").removeClass("fa-toggle-on-hover");
}
);

$(".btn-dark-basic").hover(function() {
    $(".btn-dark-basic").addClass("btn-dark-basic-hover");
}, function() {
    $(".btn-dark-basic").removeClass("btn-dark-basic-hover");
}
);

$(".btn-light").hover(function() {
    $(".btn-light").addClass("btn-light-hover");
}, function() {
    $(".btn-light").removeClass("btn-light-hover");
}
);

$(".btn-dark-master").hover(function() {
    $(".btn-dark-master").addClass("btn-dark-master-hover");
}, function() {
    $(".btn-dark-master").removeClass("btn-dark-master-hover");
}
);

// PRICE CHANGE FUNCTIONS
function monthly () {
    $(".basic").find(".price-dark").text("$19.99");
    $(".professional").find(".price-light").text("$24.99");
    $(".master").find(".price-dark").text("$39.99");
}

function annually () {
    $(".basic").find(".price-dark").text("$199.99");
    $(".professional").find(".price-light").text("$249.99");
    $(".master").find(".price-dark").text("$399.99");
}
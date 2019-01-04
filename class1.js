(function main() {

/*  exercise: control over elements and their classes using */
/*  hasclass adclass removeclass and toggle class           */

    $(".cercle").click(function() { $(this).toggleClass("plein"); });

    $(".carré").click(function() {
        if ($(this).hasClass("rang1")) {
            if ($(this).hasClass("plein")) {
                $(".rang1").removeClass("plein");
            } else {
                $(".rang1").addClass("plein");
            };
        };
        if ($(this).hasClass("rang2")) {
            if ($(this).hasClass("plein")) {
                $(".rang2").removeClass("plein");
            } else {
                $(".rang2").addClass("plein");
            };
        };
        if ($(this).hasClass("rang4")) {
            if ($(this).hasClass("plein")) {
                $(".rang4").removeClass("plein");
            } else {
                $(".rang4").addClass("plein");
            };
        };
        if ($(this).hasClass("rang5")) {
            if ($(this).hasClass("plein")) {
                $(".rang5").removeClass("plein");
            } else {
                $(".rang5").addClass("plein");
            };
        };
    });

    $(".losange").click(function() {
        if ($(this).hasClass("plein")) {
            $(".rang3").removeClass("plein");
            $(".col3").removeClass("plein");
        } else {
            $(".rang3").addClass("plein");
            $(".col3").addClass("plein");
        };
    });

    $("#btnonoff").click(function() {
        if ($(this).hasClass("plein")) {
            $(".figure").addClass("plein");
            $(".onoff").removeClass("plein");
        } else {
            $(".figure").removeClass("plein");
            $(".onoff").addClass("plein");
        };
    });

    $("#btnon").click(function() { $(".figure").addClass("plein"); });
    $("#btnoff").click(function() { $(".figure").removeClass("plein"); });
    $("#btnswitch").click(function() { $(".figure").toggleClass("plein"); });
})();
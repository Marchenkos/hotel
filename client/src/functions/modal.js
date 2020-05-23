import * as $ from "jquery";

const elements = $(".modal-overlay, .modal");

$("button").click(() => {
    elements.addClass("active");
});

$(".close-modal").click(() => {
    elements.removeClass("active");
});

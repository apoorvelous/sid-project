$(function () {
    $(".nav-item").click(function () {
        let id = $(this).attr("id")
        $(".nav-item").each(function (i, obj) {
            $(obj).removeClass("active")
        })
        $(`#${id}`).addClass("active")
    })
})

$(document).ready(function () {
    $('.your-class').slick();
});
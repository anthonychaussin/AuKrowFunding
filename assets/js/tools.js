$(document).ready(function () {
    $(".up").each(function () {
        $(this).on("click", function () {
            $.ajax({
                url: $(this).data("url")
            });
            $(this).addClass('text-success');
            $(this).siblings(".upNB").first().text(($(this).siblings(".upNB").first().text()) - 1 + 2)
        })
    })
    $(".down").each(function () {
        $(this).on("click", function () {
            $.ajax({
                url: $(this).data("url")
            });
            $(this).addClass('text-danger');
            $(this).siblings(".downNB").first().text(($(this).siblings(".downNB").first().text()) - 1 + 2)
        })
    })
    $(".sub").each(function () {
        $(this).on("click", function () {
            $.ajax({
                url: $(this).data("url")
            });
            $(this).addClass('text-info');
        })
    })
})
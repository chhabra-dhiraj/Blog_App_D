$('.ui.dropdown')
    .dropdown()
;

$('#delete_button').click(function () {
    $('#delete_blog_form').submit();
});

$('#new_submit_button').click(function () {
//     $('#blogs_view').submit().then(function (data) {
//         window.location = data.redirectUrl;
//         console.log(data.redirectUrl);
//     })

    var dataForm = $('#blogs_view').serializeArray().reduce(function (obj, item) {
        obj[item.name] = item.value;
        return obj;
    }, {});
    console.log(dataForm);

    $.post("/api/blogs", dataForm, function (data) {

        window.location = data.redirectUrl;

    });
});




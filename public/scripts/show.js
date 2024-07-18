$('.ui.dropdown')
    .dropdown();

$('#delete_button').click(function () {
    let actionUrl = `/api/blogs/${blogId}`;
    $.ajax(actionUrl, {
        type: "DELETE",
        success: function (data) {
            $('#delete_blog_error').css("visibility", "hidden")
            let redirectUrl = "/blogs";
            window.location.href = redirectUrl;
        }
    })
        .fail(function (jqXHR, textStatus, errorThrown) {
            $('#delete_blog_error').css("visibility", "visible")
            let error = JSON.parse(jqXHR.responseText);
            $('#delete_blog_error_header').text(error.error.header)
            $('#delete_blog_error_message').text(error.error.message)
        })

});
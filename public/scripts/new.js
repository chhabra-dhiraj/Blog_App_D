$('#new_blog_submit').click(function () {
    $('#new_blog_form').submit(function (e) {
        e.preventDefault(); // avoid to execute the actual submit of the form.

        let form = $(this);
        let actionUrl = "/api/blogs";

        $.ajax(actionUrl, {
            data: form.serialize(),
            type: "POST",
            success: function (data) {
                $('#new_blog_error').css("visibility", "hidden")
                let redirectUrl = "/blogs";
                window.location.href = redirectUrl;
            }
        })
            .fail(function (jqXHR, textStatus, errorThrown) {
                $('#new_blog_error').css("visibility", "visible")
                let error = JSON.parse(jqXHR.responseText);
                
                $('#new_blog_error_header').text(error.error.header)
                $('#new_blog_error_message').text(error.error.message)
            })

    });
});
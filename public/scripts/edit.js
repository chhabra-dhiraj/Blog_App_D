$('#edit_blog_submit').click(function () {
    $('#edit_blog_form').submit(function (e) {
        e.preventDefault(); // avoid to execute the actual submit of the form.

        let form = $(this);
        let actionUrl = `/api/blogs/${blogId}`;

        $.ajax(actionUrl, {
            data: form.serialize(),
            type: "PUT",
            success: function (data) {
                $('#edit_blog_error').css("visibility", "hidden")
                let redirectUrl = "/blogs";
                window.location.href = redirectUrl;
            }
        })
            .fail(function (jqXHR, textStatus, errorThrown) {
                $('#edit_blog_error').css("visibility", "visible")
                let error = JSON.parse(jqXHR.responseText);
                $('#edit_blog_error_header').text(error.error.header)
                $('#edit_blog_error_message').text(error.error.message)
            })

    });
});
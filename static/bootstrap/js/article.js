
function article_detail(id) {
    $.ajax({
        type: 'GET',
        url: 'article/'+id,
        traditional: true,
        dataType: 'json',
        success: function (msg) {
            var article_title = msg[0]['fields']['title'];
            var article_category = msg[0]['fields']['category'];
            var article_time = msg[0]['fields']['modify_time'];
            var article_author = msg[0]['fields']['author'];
            var article_bref = msg[0]['fields']['bref'];
            var article_body = msg[0]['fields']['body'];
            alert(article_title);
            $(".blog-post").remove();
        }
    });
}

$(".blog-nav a").click(function () {
    $(".blog-nav a").removeClass('active');
    $(this).addClass('active');
})


function category_detail(id) {
    $.ajax({
        type: 'GET',
        url: 'category/'+id,
        traditional: true,
        dataType: 'json',
        success: function (msg) {
            // 清空文章列表
            $(".blog-post").remove();
            $.each(msg, function (i) {
                // alert(JSON.stringify(msg[i]['fields']['title']));
                var title = msg[i]['fields']['title'];
                var body =msg[i]['fields']['body'];
                $("#article-list").prepend("<div class='blog-post'><h2 class='blog-post-title'>" + title + "</h2>" + "<p>" + body + "</p>" + "</div>");
            })
        }
    })
}
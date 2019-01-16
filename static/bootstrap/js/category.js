
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
            $(".blog-post").empty();
            alert(msg["fields"]);
        }
    })
}
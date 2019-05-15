
function article_detail(id) {
    $.ajax({
        type: 'GET',
        url: 'article/'+id,
        traditional: true,
        dataType: 'json',
        success: function (msg) {
            var article_title = msg[0]['fields']['title'];
            var article_category_id = msg[0]['fields']['category'];
            var article_time = msg[0]['fields']['modify_time'];
            var article_author = msg[0]['fields']['author'];
            var article_brief = msg[0]['fields']['brief'];
            var article_body = msg[0]['fields']['body'];
            $(".blog-post").remove();
            $("#article-list").prepend('<div class="blog-post">\n' +
                                           '<div class="blog-header">\n' +
                                                '<h1 class="blog-post-title">' + article_title + '</h1>\n' +
                                                '<div class="blog-post-meta">\n' +
                                                    '<span>\n' +
                                                        '<i class="glyphicon glyphicon-folder-open" aria-hidden="true"></i>\n' +
                                                        '<a href="{% url \'category_detail\' article.category_id %}">' + category_dic[article_category_id] + '</a>\n' +
                                                    '</span>\n' +
                                                    '<span>\n' +
                                                        '<i class="glyphicon glyphicon-time" aria-hidden="true"></i>\n' +
                                                        '<time>' + article_time +'</time>\n' +
                                                    '</span>\n' +
                                                    '<span>\n' +
                                                        '<i class="glyphicon glyphicon-user"></i>\n' +
                                                        '<i>' + article_author + '</i>\n' +
                                                    '</span>\n' +
                                                '</div>\n' +
                                           '</div>\n' +
                                           '<hr>\n' +
                                           '<div class="blog-post-body">\n' +
                                                '<table>\n' +
                                                    '<tbody>\n' +
                                                        '<tr>\n' +
                                                            '<td>' + article_brief + '</td>\n' +
                                                        '</tr>\n' +
                                                    '</tbody>\n' +
                                                '</table>\n' +
                                                '<p>' + article_body + '</p>\n' +
                                           '</div>\n' +
                                       '</div>');
        }
    });
}
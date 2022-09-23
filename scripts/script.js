$.ajax({
    url: 'http://localhost:8080/news-website-jQuery/news.php',
    type: 'GET',
    dataType: 'json',
    success:function(data){
        console.log(data)
        var html_append = "";
        $.each(data,function(index, item){
            html_append +=
            '<li><strong>News: </strong>' +
            item.text +
            '&nbsp; &nbsp; <strong>Date: </strong>' +
            item.date +
            '&nbsp; &nbsp; <strong>Title: </strong>' +
            item.title +
            '</li>';
        });
        $("#mysqltojson").html(html_append)
    }
})
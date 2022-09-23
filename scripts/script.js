$.ajax({
    url: 'http://localhost:8080/news-website-jQuery/news.php',
    type: 'GET',
    dataType: 'json',
    success:function(data){
        console.log(data)
        var title = "";
        var date = "";
        var text = "";
        
        $.each(data,function(index, item){
            title +=
            '<strong>Title: </strong>' +
            item.title ;
            date+=
            '<strong>Date: </strong>' +
            item.date ;
            text +=
            '<strong>Details: </strong>' +
            item.text 
        });
        $("#title").html(title)
        $("#date").html(date)
        $("#text").html(text)
    }
})
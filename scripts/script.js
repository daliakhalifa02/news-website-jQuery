const titleText = document.getElementsByClassName('title'),
    idText = document.getElementsByClassName('id');

    const getNews = (id) => {
        fetch(`/news-website/news.php/?id=${id}`)
            .then(res => res.json())
            .then((data) => {
                titleText.textContent = data.title;
                idText.textContent = `@${data.id}`;
            })
    }
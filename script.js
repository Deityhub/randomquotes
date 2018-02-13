$(document).ready(function () {
    var quote;
    var author;

    function getNew() {
        $.ajax({
            url: 'https://api.forismatic.com/api/1.0/',
            jsonp: 'jsonp',
            dataType: 'jsonp',
            data: {
                method: 'getQuote',
                format: 'jsonp',
                lang: 'en'
            },
            success: function (response) {
                quote = response.quoteText;
                author = response.quoteAuthor;
                $('#quote').text(quote);
                if (author) {
                    $('#author').text('- ' + author);
                } else {
                    $('#author').text('- Unknown');
                }
                $('.newQuote').off('click').on('click', function (event) {
                    event.preventDefault();
                    getNew();
                });
                $('.tweet').off('click').on('click', function(url, text, author) {
            url = encodeURIComponent(url);
            text = encodeURIComponent("#RT @deiytyhub "+ '\"' + quote + '\"');
            author = encodeURIComponent(response.quoteAuthor);
            window.open("http://twitter.com/intent/tweet?original_referer=" + url + "&text=" + text + " - " + author + "&url=" + url, "_blank");
        })
            }
        })
    }
    getNew();
});
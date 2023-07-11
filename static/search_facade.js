window.onload = function() {
    document.getElementById('searchinput').onclick = function() {
        var baseUrl = document.querySelector("meta[name='base']").getAttribute("content");
        if (baseUrl.slice(-1) == "/") {
            baseUrl = baseUrl.slice(0, -1);
        }
        var sha256='564eda9a33ba33dc73b95ef8f22a35fc127c4b2733212d52c62e7623b6a9888c';
        var sha384='y/j279OkgkW4AVNLF5iK3e4qfEtnwQ8qSQzgHkq/3EI5RYqM52jyDpfoqDirL4mO';
        var loadSearch = document.createElement('script');
        loadSearch.src = baseUrl + '/search_bundle.min.js?h=' + sha256;
        loadSearch.setAttribute('integrity', 'sha384-' + sha384);
        document.head.appendChild(loadSearch);
        document.getElementById('searchinput').onclick = '';
    }
};

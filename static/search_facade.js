window.onload = function() {
    document.getElementById('searchinput').onclick = function() {
        var baseUrl = document.querySelector("meta[name='base']").getAttribute("content");
        if (baseUrl.slice(-1) == "/") {
            baseUrl = baseUrl.slice(0, -1);
        }
        var sha256='9f6534fee00dee7b272e9bb2eeef14e5c314db17ec059085a674538b3e7933e4';
        var sha384='9oaVLFrZnw5Jmxme60RjmBnD/MZYEUunmuljDgeLpGQqeQzoyArALLXDOaGWAE0s';
        var loadSearch = document.createElement('script');
        loadSearch.src = baseUrl + '/search_bundle.min.js?h=' + sha256;
        loadSearch.setAttribute('integrity', 'sha384-' + sha384);
        document.head.appendChild(loadSearch);
        document.getElementById('searchinput').onclick = '';
    }
};

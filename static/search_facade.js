window.onload = function() {
    document.getElementById('searchinput').onclick = function() {
        var baseUrl = document.querySelector("meta[name='base']").getAttribute("content");
        if (baseUrl.slice(-1) == "/") {
            baseUrl = baseUrl.slice(0, -1);
        }
        var sha256='c10d36cbb3f23cbbd5be87dbe975d55a5daa3a8ff1a19d3b5b25e0a04f55cc3a';
        var sha384='+A6znGITKdBTqeo2jG+o7EnpxkDethO/gZ4Zwnmg0DDQgYH+MeePj0G3t6KhAOnY';
        var loadSearch = document.createElement('script');
        loadSearch.src = baseUrl + '/search_bundle.min.js?h=' + sha256;
        loadSearch.setAttribute('integrity', 'sha384-' + sha384);
        document.head.appendChild(loadSearch);
        document.getElementById('searchinput').onclick = '';
    }
};

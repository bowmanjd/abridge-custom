window.onload = function() {
    document.getElementById('searchinput').onclick = function() {
        var baseUrl = document.querySelector("meta[name='base']").getAttribute("content");
        if (baseUrl.slice(-1) == "/") {
            baseUrl = baseUrl.slice(0, -1);
        }
        var sha256='f1e8a90abdec76f95a67a8503461a004be4128881d4f139e504cd798993689fb';
        var sha384='Lv9vcpRgSafsYMjAe6Va/pbwLjO8s9KzlCXfN36Cc7h/Pd3+Mv4eH2qa4oKClpEd';
        var loadSearch = document.createElement('script');
        loadSearch.src = baseUrl + '/search_bundle.min.js?h=' + sha256;
        loadSearch.setAttribute('integrity', 'sha384-' + sha384);
        document.head.appendChild(loadSearch);
        document.getElementById('searchinput').onclick = '';
    }
};

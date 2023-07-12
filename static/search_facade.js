window.onload = function() {
    document.getElementById('searchinput').onclick = function() {
        var baseUrl = document.querySelector("meta[name='base']").getAttribute("content");
        if (baseUrl.slice(-1) == "/") {
            baseUrl = baseUrl.slice(0, -1);
        }
        var sha256='a9575107daaaa12728d2f6cf5b935f3ff7cb2768fb526684b73c4d7bc47f2808';
        var sha384='noTO+O8fQkdwUYl5SKV+MD3BJIAscyOv1d+no+yn/5KGTkzXNTBS6ZNP154V8TD0';
        var loadSearch = document.createElement('script');
        loadSearch.src = baseUrl + '/search_bundle.min.js?h=' + sha256;
        loadSearch.setAttribute('integrity', 'sha384-' + sha384);
        document.head.appendChild(loadSearch);
        document.getElementById('searchinput').onclick = '';
    }
};

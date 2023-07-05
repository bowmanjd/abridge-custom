window.onload = function() {
    document.getElementById('searchinput').onclick = function() {
        var baseUrl = document.querySelector("meta[name='base']").getAttribute("content");
        if (baseUrl.slice(-1) == "/") {
            baseUrl = baseUrl.slice(0, -1);
        }
        var sha256='1e08d5ff7e3a843f2232223fbd8fb7903f5f577181332e070bcb9076c574d1d7';
        var sha384='D7Zk73dswCerNZ2evLzstGg2CMDT3I4eQF4viVvSmhcdot2tjfPyiNlc0cFwgalj';
        var loadSearch = document.createElement('script');
        loadSearch.src = baseUrl + '/search_bundle.min.js?h=' + sha256;
        loadSearch.setAttribute('integrity', 'sha384-' + sha384);
        document.head.appendChild(loadSearch);
        document.getElementById('searchinput').onclick = '';
    }
};

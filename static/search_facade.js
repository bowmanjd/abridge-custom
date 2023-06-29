window.onload = function() {
    document.getElementById('searchinput').onclick = function() {
        var baseUrl = document.querySelector("meta[name='base']").getAttribute("content");
        if (baseUrl.slice(-1) == "/") {
            baseUrl = baseUrl.slice(0, -1);
        }
        var sha256='5f30dbdc5a7dd5f0679ff7d1e54ba0af5fd0b7676b8b2c383fd88a21d2aa1477';
        var sha384='dxaQs8Jn0988WfgCKBOpbFILnNf014QWObgFNmuWF4Hjz5uWIlGkHBZxndF3RqiE';
        var loadSearch = document.createElement('script');
        loadSearch.src = baseUrl + '/search_bundle.min.js?h=' + sha256;
        loadSearch.setAttribute('integrity', 'sha384-' + sha384);
        document.head.appendChild(loadSearch);
        document.getElementById('searchinput').onclick = '';
    }
};

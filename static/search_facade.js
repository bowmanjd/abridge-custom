window.onload = function() {
    document.getElementById('searchinput').onclick = function() {
        var baseUrl = document.querySelector("meta[name='base']").getAttribute("content");
        if (baseUrl.slice(-1) == "/") {
            baseUrl = baseUrl.slice(0, -1);
        }
        var sha256='f4d941ff0588a9258444afa841796da2e3277efde05cf3a520c602bf98372617';
        var sha384='VjC2wReQGzezKDmC8UCMGtr89zf/gu2JXB2FEf1U4Fka8fQVGPygJoo3E8Z8TQIj';
        var loadSearch = document.createElement('script');
        loadSearch.src = baseUrl + '/search_bundle.min.js?h=' + sha256;
        loadSearch.setAttribute('integrity', 'sha384-' + sha384);
        document.head.appendChild(loadSearch);
        document.getElementById('searchinput').onclick = '';
    }
};

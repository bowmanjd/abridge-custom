window.onload = function() {
    document.getElementById('searchinput').onclick = function() {
        var baseUrl = document.querySelector("meta[name='base']").getAttribute("content");
        if (baseUrl.slice(-1) == "/") {
            baseUrl = baseUrl.slice(0, -1);
        }
        var sha256='035aec823d4ec4f22c96c4687d6c8188191832e254ccee2f93bff91ee1698e13';
        var sha384='KpfbB2WqJyiixiZd65hM+5rGVSItDLDiy025oNQJeb8JS7zmm4kNdw2IK5znqAYf';
        var loadSearch = document.createElement('script');
        loadSearch.src = baseUrl + '/search_bundle.min.js?h=' + sha256;
        loadSearch.setAttribute('integrity', 'sha384-' + sha384);
        document.head.appendChild(loadSearch);
        document.getElementById('searchinput').onclick = '';
    }
};

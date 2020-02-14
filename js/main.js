(function () {
    var httpRequest,
        len = document.getElementById('len'),
        btn = document.getElementById('btn'),
        out = document.getElementById('out');

    function makeRequest() {
        httpRequest = new XMLHttpRequest();

        if (!httpRequest) {
            out.value = 'Giving up :( Cannot create an XMLHTTP instance';
            return false;
        }
        httpRequest.onreadystatechange = alertContents;
        httpRequest.open('GET', 'https://passgen.zakharov.cc/api/v1/passwords?length=' + len.value);
        httpRequest.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        httpRequest.responseType = 'json';
        httpRequest.send();
    }

    function alertContents() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            var data = httpRequest.response;
            if (httpRequest.status === 200) {
                out.value = data['password'];
            } else {
                out.value = data['description'];
            }
        }
    }

    btn.addEventListener('click', makeRequest);
    makeRequest();
})();

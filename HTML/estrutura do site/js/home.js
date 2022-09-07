var URL_BASE = "https://webapp-senai-scc.herokuapp.com"


$(document).ready(function () {
    console.log("carregou o arquivo login.js");

    loginToken = localStorage.getItem('login-token');
    if (!loginToken) {
        location.href = "login.html";
    }
    getDadosUsuario().then(function (data) {
        document.getElementById("id_usuario").innerHTML = data.id_usuario;
        document.getElementById("email").innerHTML = data.email;
    });
    $(".token").val(loginToken);
});


function getDadosUsuario() {
    return new Promise(function (resolve, reject) {
        $.ajax({
            type: "GET",
            url: URL_BASE + "/usuario/dados",
            headers: {
                "Authorization": "Bearer " + loginToken
            },
            success: function (data) {
                resolve(data.user);
            },
            error: function (data) {
                reject(data.message);
            },
            contentType: "application/json",
            dataType: "json"
        });
    })
}
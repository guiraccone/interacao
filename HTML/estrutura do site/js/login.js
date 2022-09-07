var URL_BASE = "https://webapp-senai-scc.herokuapp.com"

$(document).ready(function () {
    console.log("Carregou o arquivo login.js");
});

function login() {
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    let data = {
        "email": email,
        "senha": senha
    }
    efetuarLogin(data);
}

function efetuarLogin(data){
    console.log(data);
    dataFormatada = JSON.stringify(data);
    console.log(dataFormatada);

    $.ajax({
        type: "POST",
        url: URL_BASE + "/usuario/login",
        data:dataFormatada,
        success: function(data){
            console.log(data.token);
            localStorage.setItem('login-token', data.token);
            location.href = "home-curso.html";
        },
        error: function(data){
            console.log("Erro " + data);
        },
        contentType: "application/json",
        dataType: "json"
    });
}

/*var URL_BASE = "https://webapp-senai-scc.herokuapp.com"

$(document).ready(function () {
    console.log("carregou o arquivo login.js");
});

function login() {
    let email = document.getElementById("id_email").value;
    let senha = document.getElementById("id_senha").value;

    let data = {
        "id_email": email,
        "id_senha": senha
    }
    efetuarLogin(data);

}

function efetuarLogin(data) {
    console.log(data);
    dataFormatada = JSON.stringify(data);
    console.log(dataFormatada);

    $.ajax({
        type: "POST",
        url: URL_BASE + "/usuario/login",
        data: dataFormatada,
        success: function (data) {
            console.log(data.token);
            localStorage.setItem('login-token', data.token)
            location.href = "home.html";
        },
        error: function (data) {
            console.log("Erro: " + data);
        },
        contentType: "application/json",
        dataType: "json"
    })
}
*/

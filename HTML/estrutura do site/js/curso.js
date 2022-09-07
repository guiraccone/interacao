/*
Requisição PUT
editar cursos

Requisição DELETE
Excluir cursos
*/


var URL_BASE = "https://webapp-senai-scc.herokuapp.com"

$(document).ready(function () {
    console.log("Carregou o arquivo curso.js");

    loginToken = localStorage.getItem('login-token');
    if (!loginToken) {
        location.href = "login.html";
    }
    $("#token").val(loginToken);

    $(document).ready(function () {

        $("#addCurso").click(function () {
            var nome = document.getElementById("nome_curso").value;
            var duracao = document.getElementById("duracao_curso").value;
            var instituicao = document.getElementById("instituicao_curso").value;

            let data = {
                "nome": nome,
                "duracao": duracao,
                "instituicao": instituicao
            }
            addCurso(data);
        })
    });
    carregarCurso();
})

function addCurso(data) {

    console.log(data);
    dataFormatada = JSON.stringify(data);
    console.log(dataFormatada);

    return new Promise(function (resolve, reject) {
        $.ajax({
            type: "POST",
            url: URL_BASE + "/curso",
            data: dataFormatada,
            headers: {
                "Authorization": "Bearer " + loginToken
            },
            success: function (data) {
                resolve(console.log("Sucesso"));
            },
            error: function (data) {
                reject(console.log("Erro"));
            },
            contentType: "application/json",
            dataType: "json"
        });
    })
}

function carregarCurso() {
    $.ajax({
        type: "GET",
        url: URL_BASE + "/curso",
        headers: {
            "Authorization": "Bearer " + loginToken
        },
        success: function (data) {
            preencherDadosTabela(data);
        },
        error: function (data) {
            console.log("Erro " + data);
        },
        contentType: "application/json",
        dataType: "json"
    })

}

function preencherDadosTabela(data) {
    let tableData = "";
    for (const linha of data) {
        let urlSearch = "id_curso=" + linha.id_curso + "&nome=" +
            linha.nome + "&duracao=" +
            linha.duracao + "&instituicao=" +
            linha.instituicao;
        tableData += ''
            + '<tr>'
            + '<td>' + linha.id_curso + '</td>'
            + '<td><a href="./editarCursos.html?' + urlSearch + '">' + linha.nome + '</a></td>'
            + '<td>' + linha.duracao + '</td>'
            + '<td>' + linha.instituicao + '</td>'
            + '<td><button onclick="excluirCurso(' + linha.id_curso + ')">Excluir</button></td>'
            + '</tr>'
    }
    document.getElementById('tableData').innerHTML = tableData;
}

function excluirCurso(id_curso) {
    $.ajax({
        type: "DELETE",
        url: URL_BASE + "/curso/" + id_curso,
        headers: {
            "Authorization": "Bearer " + loginToken
        },
        success: function (data) {
            location.reload();
        },
        error: function (data) {
            console.log("Erro " + data);
        },
        contentType: "application/json",
        dataType: "json"
    })
}
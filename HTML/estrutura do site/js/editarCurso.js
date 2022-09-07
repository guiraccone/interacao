var URL_BASE = "https://webapp-senai-scc.herokuapp.com"

$(document).ready(function () {
    console.log("Carregou o arquivo editarCurso.js");

    loginToken = localStorage.getItem('login-token');
    if (!loginToken) {
        location.href = "login.html";
    }
    $("#token").val(loginToken);

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    let id_curso = urlParams.get('id_curso');
    let curso_nome = urlParams.get('curso');
    let curso_duracao = urlParams.get('duracao');
    let curso_instituicao = urlParams.get('instituicao');
    $('.editar_curso_nome').val(curso_nome);
    $('.editar_curso_duracao').val(curso_duracao);
    $('.editar_curso_instituicao').val(curso_instituicao);

})
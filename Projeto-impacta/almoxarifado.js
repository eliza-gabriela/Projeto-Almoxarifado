const cabecalho = document.querySelector("#cabecalho");
const menu = document.querySelector("#menu");
const btn_home = document.querySelector("#btn_home");
const btn_novo_funcionario = document.querySelector("#btn_novo_funcionario");
const btn_gestao_funcionario = document.querySelector("#btn_gestao_funcionario");
const btn_nova_ferramenta = document.querySelector("#btn_nova_ferramenta");
const btn_gestao_ferramenta = document.querySelector("#btn_gestao_ferramenta");

btn_home.addEventListener("click",(evt)=>{
    abrirPagina(evt.target, "./home.html");
});
btn_novo_funcionario.addEventListener("click",(evt)=>{
    abrirPagina(evt.target, "./novoFuncionario.html");
});
btn_gestao_funcionario.addEventListener("click",(evt)=>{
    abrirPagina(evt.target, "./gestaoFuncionario.html");
});
btn_nova_ferramenta.addEventListener("click",(evt)=>{
    abrirPagina(evt.target, "./novaFerramenta.html");
});
btn_gestao_ferramenta.addEventListener("click",(evt)=>{
    abrirPagina(evt.target, "./gestaoFerramenta.html");
});



const abrirPagina=(el, url)=>{
    const abas=[...document.querySelectorAll(".aba")];
    abas.forEach(e => {
        e.classList.remove("abaSelecionada");
    });
    el.classList.add("abaSelecionada");
    window.open(url,"if_principal")
}
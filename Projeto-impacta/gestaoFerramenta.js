const dadosf=document.querySelector("#dadosf");
const fundopopup=document.querySelector("#fundopopup");
const btn_gravar_f=document.querySelector("#btn_gravar_f");
const btn_cancelar_f=document.querySelector("#btn_cancelar_f");
const id_f=document.querySelector("#id_f");
const nome_f=document.querySelector("#nome_f");
const qtd_f=document.querySelector("#qtd_f");


btn_gravar_f.addEventListener("click",(evt)=>{
    fundopopup.classList.add("ocultar");
    const endpoint=`http://127.0.0.1:1880/atualizarferramentas/${id_f.value}/${nome_f.value}/${qtd_f.value}/`;
    fetch(endpoint)
    .then(res=>{
        if(res.status==200){
            alert("Dados atualizado");
            preencherdgv();
        }else{
            alert("Erro ao atualizar");
        }
    })
});
btn_cancelar_f.addEventListener("click",(evt)=>{
    fundopopup.classList.add("ocultar");
});

const preencherdgv=()=>{
    dadosf.innerHTML="";
    const endpoint=`http://127.0.0.1:1880/pesquisartodosferramentas`;
    fetch(endpoint)
    .then(res=>res.json())
    .then(res=>{
        dadosf.innerHTML="";
        res.forEach((el)=>{
            const linha=document.createElement("div");
            linha.setAttribute("class","linhadados");

            const c1=document.createElement("div")
            c1.setAttribute("class","coluna c1");
            c1.innerHTML=el.id_ferramenta;
            linha.appendChild(c1);

            const c2=document.createElement("div")
            c2.setAttribute("class","coluna c2");
            c2.innerHTML=el.nome_ferramenta;
            linha.appendChild(c2);

            const c3=document.createElement("div")
            c3.setAttribute("class","coluna c3");
            c3.innerHTML=el.qtd_ferramenta;
            linha.appendChild(c3);

            const c4=document.createElement("div")
            c4.setAttribute("class","coluna c4 c_op");
            const imgdelete=document.createElement("img");
            imgdelete.setAttribute("src","delete.svg");
            imgdelete.setAttribute("class","iconeop");
            imgdelete.addEventListener("click",(evt)=>{
                // console.log(evt.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML)
                // console.log(evt.target.parentNode.parentNode.firstChild.innerHTML);
                removerContato(evt.target.parentNode.parentNode.firstChild.innerHTML);

            });
            const imgeditar=document.createElement("img");
            imgeditar.setAttribute("src","edit.svg");
            imgeditar.setAttribute("class","iconeop");
            imgeditar.addEventListener("click",(evt)=>{
                fundopopup.classList.remove("ocultar");
                const dadosf=[...evt.target.parentNode.parentNode.childNodes];
                id_f.value=dadosf[0].innerHTML;
                nome_f.value=dadosf[1].innerHTML;
                qtd_f.value=dadosf[2].innerHTML;
            });
            c4.appendChild(imgdelete);
            c4.appendChild(imgeditar);
            linha.appendChild(c4);


            dadosf.appendChild(linha);
        });
    })

};

preencherdgv();

const removerContato=(id)=>{
    const endpoint=`http://127.0.0.1:1880/deletarferramentas/${id}`;
    fetch(endpoint)
    .then(res=>{
        if(res.status==200){
            preencherdgv();
        }
    })
}


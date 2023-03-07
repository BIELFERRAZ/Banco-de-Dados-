const estados = [
    {
    uf: "Informática", modulo: [
        {id: 1, nome: "1I3"}
       ,{id: 2, nome: "2I3"}
       ,{id: 3, nome: "3I3"}
       ] 
   }
   ,
   {
       uf: "Administração", modulo: [
        {id: 1, nome: "1I3"}
        ,{id: 2, nome: "2I3"}
        ,{id: 3, nome: "3I3"}
       ] 
   }
   ,
   {
       uf: "Turismo", cidades: [
        {id: 1, nome: "1I3"}
       ,{id: 2, nome: "2I3"}
       ,{id: 3, nome: "3I3"}
       ] 
   }
  
   ];
   

const alteraEstado = () =>{
    const selectEstado = document.getElementById("estado");
    const estadoSelecionado = selectEstado.value;

    const selectmodulo = document.getElementById("modulo");
    selectCidade.innerHTML = "";

    const divSaida = document.getElementById("saida");
    divSaida.innerHTML = "";

    if(estadoSelecionado){
        adicionaOpcaoSelect(selectmodulo, "","Selecione o modulo");

        const ufFiltro = estados.filter(
            estado => estado.uf === estadoSelecionado)[0];  
        
        ufFiltro.modulo.forEach(
            modulo => adicionaOpcaoSelect(selectCidade, modulo.id, modulo.nome)
        );
    }

    ajustaCombomodulo();

};

const ajustaCombomodulo = () => {
    const selectmodulo = document.getElementById("modulo");

    if (selectmodulo.length > 0){
        selectmodulo.disabled = false;
    }else{
        adicionaOpcaoSelect(selectmodulo, "", "Selecione o modulo");
        selectmodulo.disabled = true;
    }
};

const alteramodulo = () => {
    const divSaida = document.getElementById("saida");
    const selectEstado = document.getElementById("estado");
    const selectmodulo = document.getElementById("modulo");

    const estadoSelecionado = selectEstado.value;
    const moduloSelecionada = selectmodulo.options[selectmodulo.selectedIndex].text;
    if (selectmodulo.value){
        divSaida.innerHTML = `${moduloSelecionada}/${estadoSelecionado}`;
    }else{
        divSaida.innerHTML = "";
    }
};

const adicionaOpcaoSelect = (select, value, text) => {
    select.insertAdjacentHTML("beforeend"
                 , `<option value="${value}">${text}</option>`);
};

const iniciar = () => {
    document.getElementById("estado").addEventListener("change", alteraEstado);
    document.getElementById("modulo").addEventListener("change", alteramodulo);
    ajustaComboCidades();
};

document.addEventListener("DOMContentLoaded", iniciar);
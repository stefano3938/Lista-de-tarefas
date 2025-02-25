let InputDigiteSuaTarefa = document.getElementById('InputDigiteSuaTarefa')
var BotaoAdicionar = document.getElementById('Adicionar')
BotaoAdicionar.addEventListener('click', adicionar)
var AreaLista = document.getElementById('AreaLista')
var TextoConteudoTarefa = document.querySelectorAll('.TextoConteudoTarefa')
function adicionar()
{
 let NovoItem = `
  <section id="ContainerTarefas">
            <div id="CirculoTarefa"><img src="circle_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png" alt=""></div>
            <div id="ConteudoTarefa"><p class="TextoConteudoTarefa">${InputDigiteSuaTarefa.value}</p></div>
            <div id="Deletar"><img src="delete_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png" alt=""><p>Deletar</p></div>
        </section>`;
      AreaLista.innerHTML+= NovoItem
}
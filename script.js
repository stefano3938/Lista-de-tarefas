let InputDigiteSuaTarefa = document.getElementById('InputDigiteSuaTarefa')
var BotaoAdicionar = document.getElementById('Adicionar')
BotaoAdicionar.addEventListener('click', adicionar)
var AreaLista = document.getElementById('AreaLista')
var TextoConteudoTarefa = document.querySelectorAll('.TextoConteudoTarefa')
var BotaoDeletar = document.getElementById('Deletar')
let contador = 0
function adicionar() {
  if (InputDigiteSuaTarefa.value !== "" && InputDigiteSuaTarefa.value !== null && InputDigiteSuaTarefa !== undefined) {
    if (InputDigiteSuaTarefa.value.length > 100) {
      window.alert('A tarefa atingiu o limite de 100 caracteres')
    }
    else {

      let NovoItem = `
  <section id="${contador}" class="ContainerTarefas">
            <div id="CirculoTarefa"><img src="circle_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png" alt=""></div>
            <div id="ConteudoTarefa"><p class="TextoConteudoTarefa">${InputDigiteSuaTarefa.value}</p></div>
            <div onclick="deletarItem(event)" id="Deletar"><button><img src="delete_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png" alt=""><p>Deletar</p></button></div>
        </section>`
      AreaLista.innerHTML += NovoItem
      InputDigiteSuaTarefa.value = ''
      InputDigiteSuaTarefa.focus()
    }

  }
}

InputDigiteSuaTarefa.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    event.preventDefault()
    BotaoAdicionar.click()
  }
})

function deletarItem(event) {

  let botao = event.currentTarget
  let elementoMaisProximo = botao.closest('section');
  elementoMaisProximo.remove()
}
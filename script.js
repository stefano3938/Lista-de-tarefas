let InputDigiteSuaTarefa = document.getElementById('InputDigiteSuaTarefa')
var BotaoAdicionar = document.getElementById('Adicionar')
BotaoAdicionar.addEventListener('click', adicionar)
var AreaLista = document.getElementById('AreaLista')
var TextoConteudoTarefa = document.querySelectorAll('.TextoConteudoTarefa')
var BotaoDeletar = document.getElementById('Deletar')
let contador = 0
function adicionar() {
  if (InputDigiteSuaTarefa.value !== "" && InputDigiteSuaTarefa.value !== null && InputDigiteSuaTarefa !== undefined) 
  {
    if (InputDigiteSuaTarefa.value.length > 100) {
      window.alert('A tarefa atingiu o limite de 100 caracteres')
    }
    else {

      contador++
      let NovoItem = `
  <section id="${contador}" class="item">
            <div onclick="marcarTarefa(${contador})" id="CirculoTarefa"item><img id="icone_${contador}" src="circulo.png" alt=""></div>
            <div onclick="marcarTarefa(${contador})" id="ConteudoTarefa"><p class="TextoConteudoTarefa">${InputDigiteSuaTarefa.value}</p></div>
            <div onclick="deletar(${contador})" id="Deletar"><button><img src="lixeira.png" alt=""><p>Deletar</p></button></div>
        </section>`
      AreaLista.innerHTML += NovoItem
      InputDigiteSuaTarefa.value = ''
      InputDigiteSuaTarefa.focus()
    }
  }
  else
{
 window.alert("ERRO, POR FAVOR DIGITE UM NOME VALIDO.")
}
}

InputDigiteSuaTarefa.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    event.preventDefault()
    BotaoAdicionar.click()
  }
})

function deletar(id){
var tarefa = document.getElementById(id)
tarefa.remove()
}

function marcarTarefa(id)
{
var item = document.getElementById(id)
var classe = item.getAttribute('class')
var icone = document.getElementById('icone_' + id)
if(classe == "item")
{

  item.classList.add('item-clicado')
  icone.src = 'circulo-marcado.png'
  item.parentNode.appendChild(item)
}
else
{
  item.classList.remove('item-clicado')
  item.classList.add('item')
  icone.src = 'circulo.png'
}
}
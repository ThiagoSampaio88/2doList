//Pegar os elementos no html e mapea
const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-task')


//Array que irá guardar a lista
let listaDeItens = []

//Pega o valor do input e mostra no local que está determinado dentro da função
function novaTarefa() {

  listaDeItens.push(input.value) //push adiciona o valor digitado no input ao array

  input.value = ''

  mostrarTarefa()
}

//Exibe no html o que foi digitado no input
function mostrarTarefa(){
  
  let novaLi = ''
  
  //forEach busca no array cada item adicionado 
  listaDeItens.forEach((tarefa) => {

    //recebe e exibe o valor vindo do array e sempre que houver outro será atualizado
    novaLi = novaLi + ` 

      <li class="task">
        <img src="img/checked.png" alt="check">
        <p>${tarefa}</p>                          
        <img src="img/trash.png" alt="lixeira">
      </li>

      `
  })

  listaCompleta.innerHTML = novaLi
  
}


//Ao clicar no botão a função é chamada
button.addEventListener('click', novaTarefa)

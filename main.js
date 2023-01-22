const screen1 = document.querySelector('.screen1')

const screen2 = document.querySelector('.screen2')

const fortuneCookie = document.querySelector('#fortuneCookie')

const tryAgain = document.querySelector('#tryAgain')

const mensagem = [
  'Um dos meus dias mais produtivos foi quando eu joguei fora 1000 linhas de código.- Ken Thompson',

  'Inspecionar para prevenir defeitos é bom; Inspecionar para encontrar defeitos é desperdício. - Shigeo Shingo',

  'Não é a linguagem de programação que define o programador, mas sim sua lógica. - David Ribeiro Guilherme',

  'Antes do software poder ser reutilizável ele primeiro tem de ser utilizável. – Ralph Johnson',

  'Programadores e artistas são os únicos profissionais que tem como hobby a própria profissão. - Rafael Lain',

  'Bons programadores sabem o que escrever. Os melhores sabem o que reescrever. - Ralph Johnson'
]

fortuneCookie.addEventListener('click', handlleTryClick)
tryAgain.addEventListener('click', handleResetClick)
document.addEventListener('keydown', pressEnter)

function handlleTryClick(event) {
  toggleScreen()
  pickFortune()
}

function handleResetClick() {
  toggleScreen()
}

function pickFortune() {
  let allMensagem = mensagem.length
  let randomNumber = Math.floor(Math.random() * allMensagem)
  screen2.querySelector('h2').innerText = `${mensagem[randomNumber]}`
}

function toggleScreen() {
  screen2.classList.toggle('hide')
  screen1.classList.toggle('hide')
}

function pressEnter(e) {
  if (e.key == 'Enter' && screen2.classList.contains('hide')) {
    handlleTryClick()
  } else if (e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
}

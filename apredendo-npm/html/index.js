let button = document.getElementById('button')
let texts = document.getElementById('title-pink')

button.addEventListener('click', function () {
  
    for ( let index = 0; index < texts.length; index++){
        texts[index].textContent = "texto alterado"
}
})  


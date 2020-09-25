// PROCURAR O BOTÃO
document.querySelector("#add-time")
// QUANDO CLICAR NO BOTÃO
.addEventListener('click', cloneField)
// EXECUTAR UMA AÇÃO
function cloneField() {
    //DUPLICAR OS CAMPOS, QUE CAMPOS
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    // LIMPAR OS CAMPOS, QUE CAMPOS???
    const fields = newFieldContainer.querySelectorAll('input')
    // para cada campo, limpar, função feita de maneita inteligente
    fields.forEach(function(field) {
        field.value = ""
    })

    // COLOCAR NA PÁGINA, ONDE ???
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
    
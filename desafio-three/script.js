const $form = document.querySelector(".form")
const $inputNumber = document.querySelector(".input-number")
const $output = document.querySelector(".output")

$form.addEventListener("submit", (e) => {
    e.preventDefault()

    const inputValue = $inputNumber.value
    
    for(let contador = 0; contador <= inputValue; contador++) {
        $output.textContent = $output.textContent + contador + ' '
    }
})
const $outPut = document.querySelector(".output")
const $textField = document.querySelector(".text-field")
const $form = document.querySelector(".form")

$form.addEventListener("input", (e) => {
    e.preventDefault()

    $outPut.textContent = $textField.value
})


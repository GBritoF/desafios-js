const $box = document.querySelectorAll(".box")

$box.forEach((e) => {
    e.addEventListener("click", () => {
        e.remove()
    })
})
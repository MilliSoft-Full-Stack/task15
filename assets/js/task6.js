document.querySelectorAll(".passiv").forEach(item=>{
    item.addEventListener("click", function () {
        document.querySelector(".modal").style.display="flex"
        let url=item.previousElementSibling.getAttribute("src")
        foto.setAttribute("src", url)
        client.innerText=item.parentElement.nextElementSibling.children[0].innerText
        category.innerText=item.parentElement.nextElementSibling.children[1].innerText
    })
})

function remove() {
    document.querySelector(".modal").style.display="none"
}
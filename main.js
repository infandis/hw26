document.getElementById("categories").addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        hide();
        let goodsId = event.target.getAttribute("id") + "-goods";
        let goods = document.getElementById(goodsId);
        if (goods) {
            goods.classList.add("shown");
        }
    }
});

document.getElementById("products").addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        let shown = document.querySelector("#info .shown");
        if (shown) {
            shown.classList.remove("shown");
        }
        
        let infoId = event.target.getAttribute("id") + "-info";
        let info = document.getElementById(infoId);
        if (info) {
            info.classList.add("shown");
        }
        
        document.getElementById("buy").classList.add("shown");
    }
});

document.getElementById("buy").addEventListener("click", function(event) {
    let titleElement = document.querySelector(".product-info.shown .title");
    let title = titleElement ? titleElement.textContent : "товар";
    alert(`Тепер у вас є ${title}!`);
    hide();
})

function hide() {
    document.querySelectorAll("#products .shown, #info .shown, #buy.shown")
        .forEach(function(element) {
            element.classList.remove("shown");
        });
}
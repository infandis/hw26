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

//
const form = document.getElementById("form");
document.getElementById("buy").addEventListener("click", function(event) {
    form.classList.add("shown");   
})

//
document.getElementById("submit").addEventListener("click", function(event) {
    if(form.checkValidity()) {
        let titleElement = document.querySelector(".product-info.shown .title");
        let title = titleElement ? titleElement.textContent : "товар"; 
        let pib = document.getElementById("pib").value;
        let city = document.getElementById("city").value;
        let NP = document.getElementById("NP").value;
        alert("Ви успішно придбали " + title + ". Товар буде доставлено в "  + city + ",  відділення Нової пошти номер " + NP);
        hide(); 
    } else {
        alert("Необхідно вказати дані для відправки");  
    }   
})

function hide() {
    document.querySelectorAll("#products .shown, #info .shown, #buy.shown")
        .forEach(function(element) {
            element.classList.remove("shown");
        });
}
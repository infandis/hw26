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
});

//
const ordersWrapper = document.querySelector('.orders-wrapper');
const shopWrapper = document.querySelector('.shop-wrapper');
const ordersContainer = document.getElementById("orders-container");
document.getElementById("orders-btn").addEventListener("click", function(event) {
    ordersContainer.innerHTML = "";
    shopWrapper.classList.remove("shown");
    ordersWrapper.classList.add("shown");
    let orders = listOrders();
    for (let i in orders) {
        let order = orders[i];
        let div = document.createElement("div");
        div.classList.add("order-title");
        div.textContent = order.title;
        ordersContainer.appendChild(div);
        
        let innerDiv = document.createElement("div");
        innerDiv.classList.add("order-details");
        div.appendChild(innerDiv);
        innerDiv.innerHTML = `ПІБ: ${order.pib}<br/>Населений пункт: ${order.city}<br/>`
        div.addEventListener("click", function(event) {
            innerDiv.classList.toggle("shown");
        })
    }
});

document.getElementById("return-btn").addEventListener("click", function(event) {
    ordersWrapper.classList.remove("shown");
    shopWrapper.classList.add("shown");
})

//
document.getElementById("submit").addEventListener("click", function(event) {
    if(form.checkValidity()) {
        let titleElement = document.querySelector(".product-info.shown .title");
        let order = {
            id : Math.random().toString(36).substring(2),
            title: titleElement ? titleElement.textContent : "товар",
            pib : document.getElementById("pib").value,
            city : document.getElementById("city").value,
            post : document.getElementById("NP").value,
            date : Date.now()
        };
         
        alert("Ви успішно придбали " + order.title + ". Товар буде доставлено в "  + order.city + ",  відділення Нової пошти номер " + order.post);
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


let saveOrder = function(order) {

};

let listOrders = function() {
    return [
        {
            id : '111',
            title: 'order1',
            pib : 'sveta',
            city : 'chern',
            post : '13',
            date : Date.now() 
        },

        {
            id : '112',
            title: 'order2',
            pib : 'shani',
            city : 'chern',
            post : '13',
            date : Date.now()
        },
        {
            id : '113',
            title: 'order3',
            pib : 'irusa',
            city : 'chern',
            post : '13',
            date : Date.now()  
        }
    ];
};



    
    



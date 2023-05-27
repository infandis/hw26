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
document.getElementById("buy").addEventListener("click", function (event) {
    form.classList.add("shown");
});

//
const ordersWrapper = document.querySelector('.orders-wrapper');
const shopWrapper = document.querySelector('.shop-wrapper');
const ordersContainer = document.getElementById("orders-container");
document.getElementById("orders-btn").addEventListener("click", function (event) {
    shopWrapper.classList.remove("shown");
    ordersWrapper.classList.add("shown");
    showOrders();
});

document.getElementById("return-btn").addEventListener("click", function (event) {
    ordersWrapper.classList.remove("shown");
    shopWrapper.classList.add("shown");
})

//
document.getElementById("submit").addEventListener("click", function (event) {
    if (form.checkValidity()) {
        let titleElement = document.querySelector(".product-info.shown .title");
        let priceElement = document.querySelector(".product-info.shown .price");
        let order = {
            id: Math.random().toString(36).substring(2),
            title: titleElement ? titleElement.textContent : "товар",
            price: priceElement ? priceElement.textContent : "безкоштовно",
            pib: document.getElementById("pib").value,
            city: document.getElementById("city").value,
            post: document.getElementById("NP").value,
            date: new Date().toLocaleDateString()
        };

        addOrder(order);
        alert("Ви успішно придбали " + order.title + ". Товар буде доставлено в " + order.city + ",  відділення Нової пошти номер " + order.post);
        hide();
    } else {
        alert("Необхідно вказати дані для відправки");
    }
})

function hide() {
    document.querySelectorAll("#products .shown, #info .shown, #buy.shown")
        .forEach(function (element) {
            element.classList.remove("shown");
        });
}

function showOrders() {
    ordersContainer.innerHTML = "";

    let orders = getOrders();
    for (let i in orders) {
        let order = orders[i];

        let wrapper = document.createElement("div");
        wrapper.classList.add("order");

        let div = document.createElement("div");
        div.classList.add("order-title");
        div.innerHTML = `<span>${order.date}</span>&nbsp;<strong>${order.title}</strong>&nbsp;<span>${order.price}</span>`;
        div.addEventListener("click", function (event) {
            wrapper.classList.toggle("shown");
        })
        wrapper.appendChild(div);

        let innerDiv = document.createElement("div");
        innerDiv.classList.add("order-details");
        wrapper.appendChild(innerDiv);
        innerDiv.innerHTML = `ПІБ: ${order.pib}<br/>Населений пункт: ${order.city}<br/>Відділення нової пошти: ${order.post}<br/>`;

        let removeBtn = document.createElement("button");
        removeBtn.textContent = "Видалити";
        removeBtn.classList.add("remove-order");
        removeBtn.addEventListener("click", function (event) {
            deleteOrder(order.id);
            showOrders();
        });
        innerDiv.appendChild(removeBtn);

        ordersContainer.appendChild(wrapper);
    }
}

let addOrder = function (order) {
    localStorage.setItem(order.id, JSON.stringify(order));
};


let getOrders = function () {
    let orders = [];
    let keys = Object.keys(localStorage);
    keys.forEach(function (key) {
        let json = localStorage.getItem(key);
        let value = JSON.parse(json);
        orders.push(value);
    });
    return orders;
};

function deleteOrder(orderId) {
    localStorage.removeItem(orderId);
}


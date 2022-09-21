var foodPrices = { 'tomatoes': 30, 'lettuce': 20, 'onions': 10, 'cheese': 25, 'patty': 50 };

function tick1(food) {
    var tickfood = document.getElementById(food);
    if (document.getElementById(food).style.visibility === "hidden") {
        document.getElementById(food).style.visibility = "visible";
        prop = document.getElementById(food).style.visibility;
        addfood(food, prop);
    } else {
        document.getElementById(food).style.visibility = "hidden";
        prop = document.getElementById(food).style.visibility;
        addfood(food, prop);
    }
}
var Total = 0;

function addfood(food, prop) {
    if (prop == "hidden") {
        Total -= foodPrices[food];
        const amt = document.getElementById("disptotal");
        amt.innerText = Total;
    } else {
        Total += foodPrices[food];
        const amt = document.getElementById("disptotal");
        amt.innerText = Total;
    }
}

function payment() {
    const amt = document.getElementById("disptotal").innerText;
    if (amt == "0") {
        alert("Please select the item !");
    } else {
        alert("Payment Successfull !");
        location.reload();
    }

}
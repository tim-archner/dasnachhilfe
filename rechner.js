document.addEventListener('DOMContentLoaded', function() {
    // Set the input value to 30
    document.getElementById('inputNumber').value = 30;
    // Call showNumber to initialize the values
    showNumber();
});

function showNumber() {
    var inputElement = document.getElementById("inputNumber");
    var inputValue = parseInt(inputElement.value);

    if (isNaN(inputValue)) {
        document.getElementById("outputNumber").textContent = "";
        document.getElementById("ganzerPreis").textContent = "";
        document.getElementById("price10").textContent = "";
        document.getElementById("price20").textContent = "";
        document.getElementById("total10").textContent = "";
        document.getElementById("total20").textContent = "";
        return;
    }

    var pricePerCourse = calculatePrice(inputValue).toFixed(2);
    var totalPrice = (pricePerCourse * inputValue).toFixed(2);
    var anzahlMonateX = Math.ceil(inputValue / 4);
    var monatsRate = (totalPrice / anzahlMonateX).toFixed(2);
    var ersparnisZehner = ((inputValue*33.97) - totalPrice).toFixed(2);

    document.getElementById("outputNumber").textContent = pricePerCourse + " €";
    document.getElementById("ganzerPreis").textContent = totalPrice + " €";

    // Calculate and display prices for 10 and 20 courses
    var price10 = calculatePrice(10).toFixed(2);
    var price20 = calculatePrice(20).toFixed(2);
    var total10 = (price10 * 10).toFixed(2);
    var total20 = (price20 * 20).toFixed(2);

    document.getElementById("price10").textContent = price10 + " €";
    document.getElementById("price20").textContent = price20 + " €";
    document.getElementById("total10").textContent = total10 + " €";
    document.getElementById("total20").textContent = total20 + " €";
    document.getElementById("monateX").textContent = anzahlMonateX;
    document.getElementById("monatsRate").textContent = monatsRate + " €";
    document.getElementById("ersparnisZehner").textContent = ersparnisZehner + " €";

}

function calculatePrice(inputValue) {
    var limit1 = 30;
    var limit2 = 38;
    var factor = -0.07;
    return limit1 - (limit1 - limit2) * Math.pow(Math.E, factor * inputValue);
}

function increment() {
    var inputElement = document.getElementById("inputNumber");
    inputElement.value = parseInt(inputElement.value) + 1;
    showNumber();
}

function decrement() {
    var inputElement = document.getElementById("inputNumber");
    if (parseInt(inputElement.value) > 0) {
        inputElement.value = parseInt(inputElement.value) - 1;
        showNumber();
    }
}

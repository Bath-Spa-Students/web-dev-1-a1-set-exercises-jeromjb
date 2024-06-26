function calculateTotal() {
    // Get input values
    var costPerLiter = parseFloat(document.getElementById("cost").value);
    var litersPurchased = parseFloat(document.getElementById("liters").value);

    // Calculate total cost
    var totalCost = costPerLiter * litersPurchased;

    // Display total cost
    document.getElementById("totalCost").innerText = "Total Cost: $" + totalCost.toFixed(2);
}

document.getElementById("calculateBtn").addEventListener("click", calculateTotal);

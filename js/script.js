function ticketChangeHandler(isIncrease){
    const inputValue = document.getElementById("first-class").value;
    const inputValueNumber = parseInt(inputValue);
    let newCount = inputValueNumber;
    if(isIncrease == true){
        newCount = inputValueNumber + 1;
    }
    if(isIncrease == false && inputValueNumber > 0){
        newCount = inputValueNumber - 1;
    }
    document.getElementById("first-class").value = newCount;

    const subtotalAmount = newCount * 150;
    document.getElementById("subtotal-amount").innerText = subtotalAmount;
    const vatAmount = subtotalAmount * 0.1;
    document.getElementById("vat-amount").innerText = vatAmount;
    const totalAmount = subtotalAmount + vatAmount;
    document.getElementById("total-amount").innerText = totalAmount;
}